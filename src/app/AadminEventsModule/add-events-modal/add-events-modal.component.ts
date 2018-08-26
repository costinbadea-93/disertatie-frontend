import {Component, OnInit} from '@angular/core';
import {DatepickerOptions} from 'ng2-datepicker';
import {Constants} from '../../GlobalUtils/GlobalConstants/GlobalConstants';
import {EventLocationModel} from '../../GlobalUtils/GlobalModel/eventLocation';
import {AdminDashboardService} from '../admin-dashboard/Services/AdminDashboardService';
import {e} from '@angular/core/src/render3';
import {ErrorMessageModel} from '../../GlobalUtils/GlobalModel/errorMessageModel';
import {GlobalServiceRequests} from '../../GlobalUtils/GlobalServices/GlobalServiceRequests';

@Component({
  selector: 'app-add-events-modal',
  templateUrl: './add-events-modal.component.html',
  styleUrls: ['./add-events-modal.component.css']
})
export class AddEventsModalComponent implements OnInit {

  public options: DatepickerOptions;
  public locations: EventLocationModel[];
  public selectedLocation: EventLocationModel;
  public errorOnAddEvent =  new ErrorMessageModel();

  public eventName: string;
  public eventDescription: string;
  public eventDate: string;
  public eventStartTime: string;
  public nrOfPlaces: number;
  public category: string;


  constructor(public adminDashboardService: AdminDashboardService, public globalService: GlobalServiceRequests) { }

  ngOnInit() {
    this.options = Constants.DATEPICKER_OPTIONS;
    this.adminDashboardService.getLocations().subscribe(data => {
      this.locations = data;
    });
  }

  setLocation(location: number) {
    this.selectedLocation = this.locations.filter(loc => {
      return loc.id === location;
    })[0];
  }

  addEvent(eventName: string, eventDescription: string, eventDate: string,
           eventStartTime: string, numberOfPlacesAssigned: number, category: string, selectedLocation: any) {
    this.adminDashboardService.addEvent(eventName, eventDescription, eventDate, eventStartTime,
      numberOfPlacesAssigned, category, selectedLocation).subscribe( data => {
          this.errorOnAddEvent = this.globalService.distplayErrorObject(
            'You have successfully add location',
            true, null, 'alert-success');
        },
        error => {
          this.errorOnAddEvent = this.globalService.distplayErrorObject(
            'Operation failed during request execution',
            true, null, 'alert-warning');
        });
  }
}
