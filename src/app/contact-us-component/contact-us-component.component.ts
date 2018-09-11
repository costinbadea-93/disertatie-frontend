import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {GlobalServiceRequests} from '../GlobalUtils/GlobalServices/GlobalServiceRequests';
import {Constants} from '../GlobalUtils/GlobalConstants/GlobalConstants';
import {ErrorMessageModel} from '../GlobalUtils/GlobalModel/errorMessageModel';
import {HttpClient} from '@angular/common/http';
import {HomeService} from '../home/Services/HomeService';

@Component({
  selector: 'app-contact-us-component',
  templateUrl: './contact-us-component.component.html',
  styleUrls: ['./contact-us-component.component.css']
})
export class ContactUsComponentComponent implements OnInit {

  public name: string;
  public email: string;
  public message: string;
  public errorOnContact =  new ErrorMessageModel();

  constructor(private http: HttpClient, private globalServiceRequest: GlobalServiceRequests, public homeService: HomeService) { }

  ngOnInit() {
  }

  sentMessage(name: string, email: string, message: string) {
    if (name && email && message) {
       this.homeService.contactAdmin(name, email, message).subscribe(res => {
          console.log(res);
          this.errorOnContact = this.globalServiceRequest.distplayErrorObject(
            'You have successfully sent Message',
            true, null, 'alert-success');
    },
          error => {
            this.errorOnContact = this.globalServiceRequest.distplayErrorObject(error.error.message,
              true, error.error.status, 'alert-warning');
          });
    } else {
      this.errorOnContact = this.globalServiceRequest.distplayErrorObject(
        'Enter valid information',
        true, null, 'alert-warning');
    }

  }

}
