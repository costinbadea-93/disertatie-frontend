import { Component, OnInit } from '@angular/core';
import {ErrorMessageModel} from '../GlobalUtils/GlobalModel/errorMessageModel';
import {UserService} from '../login/Services/UserService';
import {GlobalServiceRequests} from '../GlobalUtils/GlobalServices/GlobalServiceRequests';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public errorOnRegister = new ErrorMessageModel();

  constructor(public userService: UserService, public globalService: GlobalServiceRequests) { }

  ngOnInit() {
  }

  registerUser(username: string, email: string, password: string, retypedPassword: string) {
    if (password === retypedPassword) {
        this.userService.registerUser(username, email, password).subscribe(
          data => {
            this.errorOnRegister = this.globalService.distplayErrorObject('User successfully created',
              true, 200, 'alert-success', '/login');
          },
          error => {
            this.errorOnRegister = this.globalService.distplayErrorObject('Something went wrong',
              true, 400, 'alert-warning');
          }
        );
    } else {
      this.errorOnRegister = this.globalService.distplayErrorObject('Retype password does not match password',
        true, 400, 'alert-warning');
    }
  }

}
