/**
 * Created by cbadea on 5/3/2018.
 */
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {GlobalServiceRequests} from '../../../GlobalUtils/GlobalServices/GlobalServiceRequests';
import {Observable} from 'rxjs/Observable';
import {Constants} from '../../../GlobalUtils/GlobalConstants/GlobalConstants';
import {EventLocationModel} from '../../../GlobalUtils/GlobalModel/eventLocation';
import {EventModel} from '../../../GlobalUtils/GlobalModel/eventModel';

@Injectable()
export class AdminDashboardService {

  constructor (private http: HttpClient, private globalServiceRequest: GlobalServiceRequests) {
  }

  addLocation(locationAddress: string, latitude: number, longitude: number):  Observable <any>  {
    const url = Constants.ADD_LOCATION;
    const location: EventLocationModel = this.buildLocation(locationAddress, latitude, longitude);
    return this.http.post(url, location, {headers: this.globalServiceRequest.createAuthorizationHeader()});
  }

  addEvent(eventName: string, eventDescription: string, eventDate: string,
  eventStarTime: string, numberOfPlacesAssigned: number, category: string, locationId: number):  Observable <any>  {
    const url = Constants.ADD_EVENT + '?locationId=' + locationId;
    const event: EventModel = this.buildEvent(eventName, eventDescription, eventDate, eventStarTime,
      numberOfPlacesAssigned, category);
    return this.http.post(url, event, {headers: this.globalServiceRequest.createAuthorizationHeader()});
  }

  getLocations():  Observable <EventLocationModel[]>  {
    const url = Constants.GET_LOCATIONS;
    return this.http.get<EventLocationModel[]>(url, {headers: this.globalServiceRequest.createAuthorizationHeader()});
  }


  buildLocation(locationAddress: string, latitude: number, longitude: number) {
      const location = new EventLocationModel();
      location.locationAddress = locationAddress;
      location.latitudeValue = latitude;
      location.longitudeValue = longitude;
      return location;
  }

  buildEvent(eventName: string, eventDescription: string, eventDate: string,
             eventStartTime: string, numberOfPlacesAssigned: number, category: string) {
    const event = new EventModel();
    event.eventName = eventName;
    event.eventDescription = eventDescription;
    event.eventDate = eventDate;
    event.startTime = eventStartTime;
    event.freePlacesNumber = numberOfPlacesAssigned;
    event.category = category;

    return event;
  }
}
