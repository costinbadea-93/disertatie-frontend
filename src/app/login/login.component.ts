import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from './Services/UserService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username: string;
  private password: string;

  constructor(private http: HttpClient, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  private loginUser(username: string, password: string): void {
    try {
      this.userService.obtainAccessToken(username, password).subscribe(data => {
          sessionStorage.setItem('accessToken', data['value']);
          console.log(sessionStorage.getItem('accessToken'));
          this.router.navigate(['home']);
      });
    } catch (e) {
      alert('error during authentication');
    }
  }
}
