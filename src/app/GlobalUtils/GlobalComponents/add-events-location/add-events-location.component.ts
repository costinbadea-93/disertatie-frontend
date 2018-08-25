import {Component, OnInit} from '@angular/core';
import {DatepickerOptions} from 'ng2-datepicker';
import {Constants} from '../../GlobalConstants/GlobalConstants';

@Component({
  selector: 'app-add-events-location',
  templateUrl: './add-events-location.component.html',
  styleUrls: ['./add-events-location.component.css']
})
export class AddEventsLocationComponent implements OnInit {
  public options: DatepickerOptions;

  constructor() {
  }

  ngOnInit() {
    this.options = Constants.DATEPICKER_OPTIONS;
  }
}
