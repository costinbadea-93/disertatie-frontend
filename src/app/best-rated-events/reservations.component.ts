import {Component, OnInit} from '@angular/core';
import {ReservationsService} from './Services/ReservationsService';
import {EventReservationModel} from '../GlobalUtils/GlobalModel/eventReservationModel';
import {ErrorMessageModel} from '../GlobalUtils/GlobalModel/errorMessageModel';
import {GlobalServiceRequests} from '../GlobalUtils/GlobalServices/GlobalServiceRequests';

@Component({
  selector: 'app-best-rated-events',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  public bestRatedEventsList: EventReservationModel[];
  public errorOnDeleteLocation: ErrorMessageModel =  new ErrorMessageModel();

  constructor(public bestRatedEventsService: ReservationsService,
              public reservatioService: ReservationsService,
              public globalService: GlobalServiceRequests) {
  }

  ngOnInit() {
    this.bestRatedEventsService.getReservations().subscribe(
      data => {
        this.bestRatedEventsList = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteEventReservation(eventReservationId: number) {
    this.reservatioService.deleteReservation(eventReservationId).subscribe(
      data => {
        this.bestRatedEventsList = this.bestRatedEventsList.filter(elem => {
          return elem.id !== eventReservationId;
        });
      }, error => {
        this.errorOnDeleteLocation =
          this.globalService.distplayErrorObject(error.error.message,
            true, error.error.status, 'alert-warning');
      });
  }
}
