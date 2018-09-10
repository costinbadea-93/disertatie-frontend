import {Component, OnInit} from '@angular/core';
import {TopRatedEventsService} from './Services/TopRatedEventsService';
import {EventModel} from '../GlobalUtils/GlobalModel/eventModel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-rated-events',
  templateUrl: './top-rated-events.component.html',
  styleUrls: ['./top-rated-events.component.css']
})
export class TopRatedEventsComponent implements OnInit {

  public topRatedEvents: EventModel[];

  constructor(public topRatedEventsService: TopRatedEventsService, private router: Router) {
  }

  ngOnInit() {
    this.topRatedEventsService.getTopRatedEvents().subscribe(
      successData => {
        this.topRatedEvents = successData['content'];
      },
      error => {
          console.log(error);
      });
  }

  goToEventById(id: number): void {
    this.router.navigate(['/eventDetails', id]);
  }
}

