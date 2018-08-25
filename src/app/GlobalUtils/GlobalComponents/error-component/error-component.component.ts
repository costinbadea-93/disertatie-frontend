import {Component, Input, OnInit} from '@angular/core';
import {ErrorMessageModel} from '../../GlobalModel/errorMessageModel';

@Component({
  selector: 'app-error-component',
  templateUrl: './error-component.component.html',
  styleUrls: ['./error-component.component.css']
})
export class ErrorComponentComponent implements OnInit {

  @Input() errorObject: ErrorMessageModel;
  constructor() { }

  dismissErrorMessage(errorObject: ErrorMessageModel): void {
    errorObject.shouldDisplay = false;
  }
  ngOnInit() {
  }

}
