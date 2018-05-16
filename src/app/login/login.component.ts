import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from './Services/UserService';
import {Router} from '@angular/router';
import {UserModel} from '../GlobalUtils/GlobalModel/userModel'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

private user : UserModel;

  constructor(private http: HttpClient, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  private loginUser(username: string, password: string): void {
    try {
      this.userService.obtainAccessToken(username, password).subscribe(data => {
          sessionStorage.setItem('accessToken', data['value']);
          this.userService.getUserInformationsByToken().subscribe(userData => {
            this.user =  userData;
            sessionStorage.setItem('userInfo', JSON.stringify(this.user));
            this.router.navigate(['home']);
          });
      });
    } catch (e) {
      alert('error during authentication');
    }
  }
}
