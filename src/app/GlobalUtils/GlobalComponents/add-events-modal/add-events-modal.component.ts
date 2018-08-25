import {Component, OnInit} from '@angular/core';
import {DatepickerOptions} from 'ng2-datepicker';
import {Constants} from '../../GlobalConstants/GlobalConstants';

@Component({
  selector: 'app-add-events-modal',
  templateUrl: './add-events-modal.component.html',
  styleUrls: ['./add-events-modal.component.css']
})
export class AddEventsModalComponent implements OnInit {

  public options: DatepickerOptions;

  constructor() { }

  ngOnInit() {
    this.options = Constants.DATEPICKER_OPTIONS;
  }
}
