import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventDetailsService} from './Services/EventDetailsService';
import {EventModel} from '../GlobalUtils/GlobalModel/eventModel';
// import {GoogleMaps} from '../Google Services/google-maps';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  public event: EventModel;

  constructor(private route: ActivatedRoute, public eventDetailsService: EventDetailsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventDetailsService.getEvent(params.id).subscribe(data => {
        this.event = data;
        console.log(this.event);
      });
    });
  }

  applyOnEvent(event: EventModel, locationId: number) {
    let userId =  JSON.parse(sessionStorage.getItem('userInfo'))['id'];
    this.eventDetailsService.applyOnEvent(userId, locationId, event).subscribe(data => {
      if(event.id == data){
        alert("Succesfully applyed on event !");
      }
    });
  }

}
