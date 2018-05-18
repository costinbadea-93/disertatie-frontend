import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventDetailsService} from './Services/EventDetailsService';
import {EventModel} from '../GlobalUtils/GlobalModel/eventModel';
import {EventReservationModel} from "../GlobalUtils/GlobalModel/eventReservation";
import {assertNumber} from "@angular/core/src/render3/assert";
import {ErrorMessageModel} from "../GlobalUtils/GlobalModel/errorMessageModel";
import {GlobalServiceRequests} from "../GlobalUtils/GlobalServices/GlobalServiceRequests";
// import {GoogleMaps} from '../Google Services/google-maps';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  public event: EventModel;
  public numberOfPlacesOnEvents: string = "1";
  public eventReservation : EventReservationModel =  new EventReservationModel();
  public errorOnApply : ErrorMessageModel = new ErrorMessageModel();

  public numberOfPlaces = [
    {id: 1, value: "1"},
    {id: 2, value: "2"},
    {id: 3, value: "3"},
    {id: 4, value: "4"}
  ];


  constructor(private route: ActivatedRoute, public eventDetailsService: EventDetailsService, public globalService : GlobalServiceRequests) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventDetailsService.getEvent(params.id).subscribe(data => {
        this.event = data;
        console.log(this.event);
      });
    });
  }

  applyOnEvent(event: EventModel) {

    let userId =  JSON.parse(sessionStorage.getItem('userInfo'))['id'];
    this.eventReservation.id = null;
    this.eventReservation.numberOfReservedPlaces = Number(this.numberOfPlacesOnEvents);
    this.eventReservation.user = JSON.parse(sessionStorage.getItem('userInfo'));
    this.eventReservation.event = event;

    console.log(this.eventReservation);
    this.eventDetailsService.applyOnEvent(userId, event.id, this.eventReservation).subscribe(
      result => {
        console.log(result);
    }, error =>{
        this.globalService.validateRequestTokenExpired(error);
        this.errorOnApply.message = error.error;
        this.errorOnApply.shouldDisplay = true;
        this.errorOnApply.statusCode =  error.status;
        console.log(this.errorOnApply);
    });
  }

  setNumberOfPlaces(value: string): void {
    this.numberOfPlacesOnEvents =  value;
  }

  dismissErrorMessage(errorObject : ErrorMessageModel) : void {
    errorObject.shouldDisplay = false;
  }

}
