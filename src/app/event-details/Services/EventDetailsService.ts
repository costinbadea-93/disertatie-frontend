/**
 * Created by cbadea on 5/3/2018.
 */
import { Injectable } from '@angular/core';
import { EventModel } from '../../GlobalUtils/GlobalModel/eventModel';
import { Constants } from '../../GlobalUtils/GlobalConstants/GlobalConstants';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import {GlobalServiceRequests} from '../../GlobalUtils/GlobalServices/GlobalServiceRequests';
import {EventReservationModel} from "../../GlobalUtils/GlobalModel/eventReservation";

@Injectable()
export class EventDetailsService {

  constructor (private http: HttpClient, private globalServiceRequest: GlobalServiceRequests) {
  }

  getEvent(id: number): Observable <EventModel> {
    const url = Constants.GET_SPECIFIC_EVENT_URL + '/' + id;
    return this.http.get<EventModel>(url, {headers: this.globalServiceRequest.createAuthorizationHeader()});
  }

  applyOnEvent(userId: number, eventId: number, eventReservation: EventReservationModel): Observable<number>{
    const url = Constants.APPLY_ON_SPECIFIC_EVENT + '?userId=' + userId + '&eventId=' + eventId;
    return this.http.post<number>(url, eventReservation , { headers: this.globalServiceRequest.createAuthorizationHeader()});
  }


}
