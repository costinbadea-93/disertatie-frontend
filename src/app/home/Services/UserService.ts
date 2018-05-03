/**
 * Created by cbadea on 5/3/2018.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../Utils/Constants';

@Injectable()
export class UserService {

  constructor (private http: HttpClient){
  }


  obtainAccessToken(username : string, password : string)  {
    let url = Constants.AUTH_TOKEN_URL + "?username=" + username + "&password=" + password;
    this.http.post(url,{}).subscribe(data => {
      console.log(data);
      //return data;
    });
  }
}
