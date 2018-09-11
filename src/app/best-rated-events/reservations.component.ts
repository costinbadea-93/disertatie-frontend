import { Component, OnInit } from '@angular/core';
import {ReservationsService} from './Services/ReservationsService';
import {EventReservationModel} from '../GlobalUtils/GlobalModel/eventReservationModel';

@Component({
  selector: 'app-best-rated-events',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  public bestRatedEventsList: EventReservationModel[];

  constructor(public bestRatedEventsService: ReservationsService) { }

  ngOnInit() {
    this.bestRatedEventsService.getReservations().subscribe(
      data => {
        this.bestRatedEventsList  = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
