/**
 * Created by cbadea on 5/3/2018.
 */
import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { EventModel } from '../Model/eventModel';
import { Constants } from '../Utils/Constants';
import { GlobalServiceRequests} from '../../GlobalServices/GlobalServiceRequests';

@Injectable()
export class HomeService {

  constructor (private http: HttpClient, private globalServiceRequest: GlobalServiceRequests) {
  }

  getEvents(): any {
    const url = Constants.GET_EVENTS_URL;
    console.log(this.globalServiceRequest.createAuthorizationHeader());
    return  this.http.get<EventModel>(url, {headers: this.globalServiceRequest.createAuthorizationHeader()}).subscribe(
      data => {
        return (data);
  },
    error => {
    alert('Some error ocured during retrieving EVENTS');
  });
  }


}
