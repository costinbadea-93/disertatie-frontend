import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventDetailsService} from './Services/EventDetailsService';
import {EventModel} from '../GlobalUtils/GlobalModel/eventModel';
import {EventReservationModel} from '../GlobalUtils/GlobalModel/eventReservation';
import {ErrorMessageModel} from '../GlobalUtils/GlobalModel/errorMessageModel';
import {GlobalServiceRequests} from '../GlobalUtils/GlobalServices/GlobalServiceRequests';
import {EventReview} from '../GlobalUtils/GlobalModel/eventReview';
// import {GoogleMaps} from '../Google Services/google-maps';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  public event: EventModel = new EventModel();
  public eventsReviews: EventReview[];
  public numberOfPlacesOnEvents: String = '1';
  public eventReservation: EventReservationModel =  new EventReservationModel();
  public errorOnApply: ErrorMessageModel = new ErrorMessageModel();
  public errorOnRate: ErrorMessageModel =  new ErrorMessageModel();
  public errorOnAddReview: ErrorMessageModel =  new ErrorMessageModel();

  public numberOfPlaces = [
    {id: 1, value: '1'},
    {id: 2, value: '2'},
    {id: 3, value: '3'},
    {id: 4, value: '4'}
  ];


  public showReviewBox = false;
  public reviewText: string = '';
  public isAdmin: boolean;


  constructor(private route: ActivatedRoute, public eventDetailsService: EventDetailsService, public globalService: GlobalServiceRequests) {
  }

  ngOnInit() {
    this.isAdmin = this.globalService.checkIfAdminUser();
    this.route.params.subscribe(params => {
      this.eventDetailsService.getEvent(params.id).subscribe(data => {
        this.event = data;
        this.eventDetailsService.getEventReview(params.id).subscribe(reviwes => {
        this.eventsReviews = reviwes;
        });
      });
    });
  }

  applyOnEvent(event: EventModel) {

    const userId =  JSON.parse(sessionStorage.getItem('userInfo'))['id'];
    this.eventReservation.id = null;
    this.eventReservation.numberOfReservedPlaces = Number(this.numberOfPlacesOnEvents);
    this.eventReservation.user = JSON.parse(sessionStorage.getItem('userInfo'));
    this.eventReservation.event = event;

    console.log(this.eventReservation);
    this.eventDetailsService.applyOnEvent(userId, event.id, this.eventReservation).subscribe(
      result => {
        this.event.freePlacesNumber = this.event.freePlacesNumber - this.eventReservation.numberOfReservedPlaces;
        this.errorOnApply = this.globalService.distplayErrorObject('You have successfully applied', true, 400, 'alert-success');
    }, error => {
        this.globalService.validateRequestTokenExpired(error);
        this.errorOnApply = this.globalService.distplayErrorObject( error.error, true, error.status, 'alert-warning');
    });
  }

  setNumberOfPlaces(value: string): void {
    this.numberOfPlacesOnEvents =  value;
  }


  private validateAlradyRateEvent(eventId) {
    if (!sessionStorage.getItem('ratedEvents')) {
      const alreadyRatedEvents = [];
      alreadyRatedEvents.push(eventId);
      sessionStorage.setItem('ratedEvents', JSON.stringify(alreadyRatedEvents));
      this.errorOnRate = this.globalService.distplayErrorObject(
        'You have successfully rate this event', true,
        null, 'alert-success'
      );
    } else {
      if (JSON.parse(sessionStorage.getItem('ratedEvents')).includes(eventId)) {
        this.errorOnRate = this.globalService.distplayErrorObject(
          'You have already rate this event', true,
          null, 'alert-warning'
        );
      } else {
        const currentRatedEvents = JSON.parse(sessionStorage.getItem('ratedEvents'));
        currentRatedEvents.push(eventId);
        console.log(currentRatedEvents);
        sessionStorage.setItem('ratedEvents', JSON.stringify(currentRatedEvents));
        this.errorOnRate = this.globalService.distplayErrorObject(
          'You have successfully rate this event', true,
          null, 'alert-success'
        );
      }
    }
  }

  rateEvent(eventId: number) {
    this.eventDetailsService.rateEvent(eventId).subscribe(data => {
      this.validateAlradyRateEvent(eventId);
    });
  }

  changeReviewStatus() {
    this.showReviewBox = !this.showReviewBox;
    console.log(this.showReviewBox);
  }

  addReview () {
    if (this.reviewText === '') {
      this.errorOnAddReview = this.globalService.distplayErrorObject(
        'Please enter a valid text', true,
        null, 'alert-warning'
      );
      return;
    }
      this.eventDetailsService.addReview(this.reviewText, this.event.id).subscribe(
        data => {
            this.eventsReviews.push(data);
        },
        error =>  {
          this.errorOnAddReview = this.globalService.distplayErrorObject(error.error.message, true, error.error.status, 'alert-warning'
          );
        }
      );
  }
}
