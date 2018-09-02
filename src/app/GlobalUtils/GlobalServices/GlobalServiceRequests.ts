/**
 * Created by cbadea on 5/3/2018.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import {ErrorMessageModel} from '../GlobalModel/errorMessageModel';

@Injectable()
export class GlobalServiceRequests {

  static headers: any = {};
  public defaultErrorClasses: String = 'alert alert-dismissible fade-in ';

  constructor (private http: HttpClient, private router: Router) {
  }

  createAuthorizationHeader(): any {
    GlobalServiceRequests.headers['Authorization'] =  'Bearer ' +
      sessionStorage.getItem('accessToken');
    return GlobalServiceRequests.headers;
  }

  distplayErrorObject (message: String, shouldDisplay: boolean, statusCode: number, classType: string, link?: string): ErrorMessageModel {
    const returnedError = new ErrorMessageModel();
    returnedError.message = message;
    returnedError.shouldDisplay = shouldDisplay;
    returnedError.statusCode = statusCode;
    returnedError.classType = this.defaultErrorClasses + classType;
    returnedError.link = link || null;
    return returnedError;
  }

  validateRequestTokenExpired(errorMessageObject) {
    if(errorMessageObject.status == 500) {
      this.router.navigate(['login']);
      sessionStorage.clear();
      alert("Your token has expired you will be redirect to login page");
      return;
    }
  }

  checkIfAdminUser() {
    return JSON.parse(sessionStorage.getItem('userInfo'))['roles'].includes('ROLE_ADMIN');
  }

}
