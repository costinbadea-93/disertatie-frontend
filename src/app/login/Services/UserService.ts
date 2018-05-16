/**
 * Created by cbadea on 5/3/2018.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../GlobalUtils/GlobalConstants/GlobalConstants';
import { Observable } from '../../../../node_modules/rxjs';
import { UserModel } from "../../GlobalUtils/GlobalModel/userModel";
import {GlobalServiceRequests} from "../../GlobalUtils/GlobalServices/GlobalServiceRequests";

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
}
