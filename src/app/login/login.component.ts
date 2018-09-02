import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from './Services/UserService';
import {Router} from '@angular/router';
import {UserModel} from '../GlobalUtils/GlobalModel/userModel';
import {ErrorMessageModel} from '../GlobalUtils/GlobalModel/errorMessageModel';
import {GlobalServiceRequests} from '../GlobalUtils/GlobalServices/GlobalServiceRequests';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: UserModel;
  public errorOnLogin = new ErrorMessageModel();

  constructor(private http: HttpClient, private userService: UserService, private router: Router, private globalService: GlobalServiceRequests) {
  }

  ngOnInit(): void {
  }

  private loginUser(username: string, password: string): void {
    this.userService.obtainAccessToken(username, password).subscribe(
      data => {
        sessionStorage.setItem('accessToken', data['value']);
        this.userService.getUserInformationsByToken().subscribe(userData => {
          this.user = userData;
          sessionStorage.setItem('userInfo', JSON.stringify(this.user));
          this.router.navigate(['home']);
        });
      },
      error => {
        this.errorOnLogin = this.globalService.distplayErrorObject(error.error.message, true, error.error.status, 'alert-warning');
      });
  }
}

