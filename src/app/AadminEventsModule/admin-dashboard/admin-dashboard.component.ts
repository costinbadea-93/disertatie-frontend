import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../home/Services/HomeService';
import {EventModel} from '../../GlobalUtils/GlobalModel/eventModel';
import {AdminDashboardService} from './Services/AdminDashboardService';
import {ErrorMessageModel} from '../../GlobalUtils/GlobalModel/errorMessageModel';
import {GlobalServiceRequests} from '../../GlobalUtils/GlobalServices/GlobalServiceRequests';
import {EventLocationModel} from '../../GlobalUtils/GlobalModel/eventLocation';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  public isEditable =  false;

  public events: EventModel[] = [];
  public locations: EventLocationModel[] = [];
  public errorOnDeleteEvent: ErrorMessageModel =  new ErrorMessageModel();
  public errorOnUpdateEvent: ErrorMessageModel =  new ErrorMessageModel();
  public errorOnUpdateLocation: ErrorMessageModel =  new ErrorMessageModel();

  constructor(public homeService: HomeService, public adminService: AdminDashboardService, public globalService: GlobalServiceRequests) { }

  ngOnInit() {
    this.homeService.getEvents().subscribe(data => {
      this.events =  data['content'];
      this.adminService.getLocations().subscribe(locs => {
        this.locations = locs;
      });
    });
  }

  deleteEvent(eventId: number) {
        this.adminService.deleteEvent(eventId).subscribe(dataSuccess  => {
            this.events  = this.events.filter(elem => {
              return elem.id !== eventId;
            });
          },
          error => {
            this.errorOnDeleteEvent =
              this.globalService.distplayErrorObject(error.error.message,
                true, error.error.status, 'alert-warning');
          });
  }

  deleteLocation(locationId: number) {
        this.adminService.deleteLocation(locationId).subscribe(dataSuccess  => {
            this.locations  = this.locations.filter(elem => {
              return elem.id !== locationId;
            });
          },
          error => {
            this.errorOnUpdateLocation =
              this.globalService.distplayErrorObject(error.error.message,
                true, error.error.status, 'alert-warning');
          });
  }


  updateEmitedData($event) {
    this.events = $event;
  }

  changeEditable(element) {
    const childrenList  =  element.getElementsByTagName('input');
    for (let i = 0; i < childrenList.length; i++) {
      childrenList[i].readOnly =  !childrenList[i].readOnly;
    }
  }

  updateEvent(event: EventModel, element) {
          event.eventName =  element.getElementsByTagName('input')[0].value;
          event.category =  element.getElementsByTagName('input')[1].value;
          event.eventDescription = element.getElementsByTagName('input')[2].value;
          event.freePlacesNumber =  element.getElementsByTagName('input')[3].value;
          event.startTime =  element.getElementsByTagName('input')[4].value;

          this.adminService.updateEvent(event).subscribe(
            successUpdate => {
              this.changeEditable(element);
            },
            error => {
              this.errorOnDeleteEvent =
                this.globalService.distplayErrorObject(error.error.message,
                  true, error.error.status, 'alert-warning');
            });
  }

  updateLocation(location: EventLocationModel, element) {
          location.locationAddress =  element.getElementsByTagName('input')[0].value;
          location.latitudeValue =  element.getElementsByTagName('input')[1].value;
          location.longitudeValue = element.getElementsByTagName('input')[2].value;

          this.adminService.updateLocation(location).subscribe(
            successUpdate => {
              this.changeEditable(element);
            },
            error => {
              this.errorOnUpdateLocation =
                this.globalService.distplayErrorObject(error.error.message,
                  true, error.error.status, 'alert-warning');
            });
  }
}
