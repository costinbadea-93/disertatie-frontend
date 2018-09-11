/**
 * Created by cbadea on 5/3/2018.
 */
import { Injectable } from '@angular/core';
import { EventModel } from '../../GlobalUtils/GlobalModel/eventModel';
import { Constants } from '../../GlobalUtils/GlobalConstants/GlobalConstants';
import { GlobalServiceRequests} from '../../GlobalUtils/GlobalServices/GlobalServiceRequests';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';

@Injectable()
export class HomeService {

  constructor (private http: HttpClient, private globalServiceRequest: GlobalServiceRequests) {
  }

  getEvents(): Observable <EventModel[]> {
    const url = Constants.GET_EVENTS_URL;
      return this.http.get<EventModel[]>(url, {headers: this.globalServiceRequest.createAuthorizationHeader()});
  }

  contactAdmin(name: string, email: string, message: string): Observable <string> {
    const url = Constants.CONTACT_ADMIN  + '?name=' + name + '&email=' + email + '&text=' + message;
    return this.http.post<string>(url, {},{headers: this.globalServiceRequest.createAuthorizationHeader()});
  }
}
