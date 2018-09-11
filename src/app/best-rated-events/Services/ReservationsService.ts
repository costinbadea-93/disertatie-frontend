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
import {EventReservationModel} from '../../GlobalUtils/GlobalModel/eventReservationModel';

@Injectable()
export class ReservationsService {

  constructor (private http: HttpClient, private globalServiceRequest: GlobalServiceRequests) {
  }

  getReservations(): Observable <EventReservationModel[]> {
    const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
    const url = Constants.GET_RESERVATIONS + '/' + userId;
      return this.http.get<EventReservationModel[]>(url, {headers: this.globalServiceRequest.createAuthorizationHeader()});
  }

  deleteReservation(eventReservationId: number):  Observable <any>  {
    const url = Constants.DELETE_RESERVATION + '?eventReservationId=' + eventReservationId;
    return this.http.delete(url, {headers: this.globalServiceRequest.createAuthorizationHeader()});
  }
}
