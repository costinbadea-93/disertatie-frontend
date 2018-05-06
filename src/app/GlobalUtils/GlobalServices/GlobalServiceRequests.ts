/**
 * Created by cbadea on 5/3/2018.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GlobalServiceRequests {

  static headers: any = {};

  constructor (private http: HttpClient) {
  }

  createAuthorizationHeader(): any {
    GlobalServiceRequests.headers['Authorization'] =  'Bearer ' +
      sessionStorage.getItem('accessToken');
    return GlobalServiceRequests.headers;
  }

}
