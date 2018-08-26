/**
 * Created by cbadea on 5/3/2018.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../GlobalUtils/GlobalConstants/GlobalConstants';
import { Observable } from '../../../../node_modules/rxjs';
import { UserModel } from '../../GlobalUtils/GlobalModel/userModel';
import {GlobalServiceRequests} from '../../GlobalUtils/GlobalServices/GlobalServiceRequests';
import {RoleModel} from '../../GlobalUtils/GlobalModel/roleModel';

@Injectable()


export class UserService {

  constructor (private http: HttpClient, private globalServiceRequest: GlobalServiceRequests) {
  }

  obtainAccessToken(username: string, password: string):  Observable <any>  {
    const url = Constants.AUTH_TOKEN_URL + '?username=' + username + '&password=' + password;
    return this.http.post(url, {});
  }

  getUserInformationsByToken(): Observable <UserModel> {
    const url = Constants.GET_USER_INFO;
    return this.http.get<UserModel>(url, {headers: this.globalServiceRequest.createAuthorizationHeader()});
  }

  registerUser(username: string, email: string, password: string): Observable <UserModel> {
    const url = Constants.REGISTER_USER;
    return this.http.post<UserModel>(url, this.buildUser(username, email, password), {headers: {}});
  }



  buildUser(username: string, email: string, password: string) {
    const user = new UserModel();
    user.username = username;
    user.password =  password;
    user.email = email;
    user.roles.push(RoleModel.ROLE_ADMIN);
    console.log(user);
    return user;
  }
}
