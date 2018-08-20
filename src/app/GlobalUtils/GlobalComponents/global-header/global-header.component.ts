import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.css']
})
export class GlobalHeaderComponent implements OnInit {

  @Input() selected: string;
  public menuItems  = ['Home', 'AboutUs'];
  public currentRoute: String;
  constructor(private router: Router) {}

  toggleNavbar(expandLink) {
    const classList =  expandLink.classList;
    if (classList.contains('responsive')) {
      classList.remove('responsive');
    } else {
      expandLink.classList.add('responsive');
    }
  }

  ngOnInit() {
    this.currentRoute = this.router.url.slice(1);
  }

}
