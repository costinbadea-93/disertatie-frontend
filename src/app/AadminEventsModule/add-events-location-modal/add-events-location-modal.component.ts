import {Component, OnInit, ViewChild} from '@angular/core';
import {DatepickerOptions} from 'ng2-datepicker';
import {Constants} from '../../GlobalUtils/GlobalConstants/GlobalConstants';
import {AdminDashboardService} from '../admin-dashboard/Services/AdminDashboardService';
import {GlobalServiceRequests} from '../../GlobalUtils/GlobalServices/GlobalServiceRequests';
import {ErrorMessageModel} from '../../GlobalUtils/GlobalModel/errorMessageModel';

@Component({
  selector: 'app-add-events-location-modal',
  templateUrl: './add-events-location-modal.component.html',
  styleUrls: ['./add-events-location-modal.component.css']
})
export class AddEventsLocationModalComponent implements OnInit {
  public options: DatepickerOptions;
  public locationAddress: string;
  public latitude: number;
  public longitude: number;
  public errorOnAddLocation =  new ErrorMessageModel();

  constructor(public adminDashboardService: AdminDashboardService, public globalService: GlobalServiceRequests) {}

  ngOnInit() {
    this.options = Constants.DATEPICKER_OPTIONS;
  }
  addNewLocation(locationAddress: string, latitude: number, longitude: number) {
    this.adminDashboardService.addLocation(locationAddress, latitude, longitude).subscribe(
      data => {
        this.errorOnAddLocation = this.globalService.distplayErrorObject(
          'You have successfully add location',
          true, null, 'alert-success');
      },
      error => {
        this.errorOnAddLocation = this.globalService.distplayErrorObject(
          'Operation failed during request execution',
          true, null, 'alert-warning');
      }
     );
  }
}
