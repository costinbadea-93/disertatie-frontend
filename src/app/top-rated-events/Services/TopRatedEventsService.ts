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
export class TopRatedEventsService {

  constructor (private http: HttpClient, private globalServiceRequest: GlobalServiceRequests) {
  }

  getTopRatedEvents(): Observable <EventModel[]> {
    const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
    const url = Constants.GET_TOP_RATED;
      return this.http.get<EventModel[]>(url, {headers: this.globalServiceRequest.createAuthorizationHeader()});
  }
}
