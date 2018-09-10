import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.css']
})
export class GlobalHeaderComponent implements OnInit {

  @Input() selected: string;
  public menuItems  = [
    {route: 'home', value: 'Home'},
    // {route: 'bestRatedEvents', value: 'Best rated events'},
    {route: 'contactUs', value: 'Contact us'},
    {route: 'yourReservations', value: 'Your reservations'},
  ];
  public currentRoute: String;
  public isAdmin = false;
  constructor(private router: Router) {}

  toggleNavbar(expandLink) {
    const classList =  expandLink.classList;
    if (classList.contains('responsive')) {
      classList.remove('responsive');
    } else {
      expandLink.classList.add('responsive');
    }
  }

  checkIfAdminUser() {
    return JSON.parse(sessionStorage.getItem('userInfo'))['roles'].includes('ROLE_ADMIN');
  }

  ngOnInit() {
    this.currentRoute = this.router.url.slice(1);
  }

  logutUser() {
    sessionStorage.removeItem('userInfo');
    this.router.navigate(['/']);
  }

}
