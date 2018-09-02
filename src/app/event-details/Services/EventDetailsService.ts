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
import {EventReservationModel} from '../../GlobalUtils/GlobalModel/eventReservation';
import {EventReview} from '../../GlobalUtils/GlobalModel/eventReview';
import {UserModel} from '../../GlobalUtils/GlobalModel/userModel';
import {D} from '@angular/core/src/render3';

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

  rateEvent(eventId: number): Observable<Event> {
    const url = Constants.RATE_EVENT + '/'  + eventId;
    return this.http.post<Event>(url, {} , { headers: this.globalServiceRequest.createAuthorizationHeader()});
  }

  getEventReview(id: number): Observable <EventReview[]> {
    const url = Constants.EVENT_REVIEWS + '/' + id;
    const user: UserModel =  JSON.parse(sessionStorage.getItem('userInfo'));
    return this.http.post<EventReview[]>(url, user, {headers: this.globalServiceRequest.createAuthorizationHeader()});
  }

  addReview(text: string, eventId: number): Observable <EventReview> {
    const url = Constants.ADD_REVIEWS;
    const user: UserModel =  JSON.parse(sessionStorage.getItem('userInfo'));
    const review: EventReview =  new EventReview();
    review.reviewText =  text;
    review.eventId = eventId;
    review.reviewDate = new Date().toDateString();
    review.username =  user.username;

    return this.http.post<EventReview>(url, {review: review, user: user}, {headers: this.globalServiceRequest.createAuthorizationHeader()});
  }

  deleteReview(id: number): Observable <any> {
    const url = Constants.DELETE_REVIEW + '/' + id;
    const user: UserModel =  JSON.parse(sessionStorage.getItem('userInfo'));
    return this.http.post<any>(url, user,{headers: this.globalServiceRequest.createAuthorizationHeader()});
  }
}
