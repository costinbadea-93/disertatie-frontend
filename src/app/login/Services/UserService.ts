/**
 * Created by cbadea on 5/3/2018.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../GlobalUtils/GlobalConstants/GlobalConstants';
import {EventModel} from '../../GlobalUtils/GlobalModel/eventModel';
import {Observable} from '../../../../node_modules/rxjs';

@Injectable()
export class UserService {

  constructor (private http: HttpClient) {
  }

  obtainAccessToken(username: string, password: string):  Observable <any>  {
    const url = Constants.AUTH_TOKEN_URL + '?username=' + username + '&password=' + password;
    return this.http.post(url, {});
  }
}
