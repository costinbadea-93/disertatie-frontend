/**
 * Created by cbadea on 5/3/2018.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";

@Injectable()
export class GlobalServiceRequests {

  static headers: any = {};

  constructor (private http: HttpClient, private router: Router) {
  }

  createAuthorizationHeader(): any {
    GlobalServiceRequests.headers['Authorization'] =  'Bearer ' +
      sessionStorage.getItem('accessToken');
    return GlobalServiceRequests.headers;
  }

  validateRequestTokenExpired(errorMessageObject) {
    if(errorMessageObject.status == 500) {
      this.router.navigate(['login']);
      sessionStorage.clear();
      alert("Your token has expired you will be redirect to login page");
      return;
    }
  }

}
