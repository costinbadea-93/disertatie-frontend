/**
 * Created by cbadea on 5/3/2018.
 */
import { Injectable } from '@angular/core';
import { EventModel } from '../Model/eventModel';
import { Constants } from '../Utils/Constants';
import { GlobalServiceRequests} from '../../GlobalServices/GlobalServiceRequests';
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


}
