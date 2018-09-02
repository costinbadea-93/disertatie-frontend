import {Component, Input, OnInit} from '@angular/core';
import {EventReview} from '../../GlobalModel/eventReview';
import {EventDetailsService} from '../../../event-details/Services/EventDetailsService';
import {ErrorMessageModel} from '../../GlobalModel/errorMessageModel';
import {GlobalServiceRequests} from '../../GlobalServices/GlobalServiceRequests';

@Component({
  selector: 'app-review-component',
  templateUrl: './review-component.component.html',
  styleUrls: ['./review-component.component.css']
})
export class ReviewComponentComponent implements OnInit {

  @Input()
  reviewsList: EventReview[];
  @Input()
  isAdmin: boolean;

  public errorOnDeleteReview: ErrorMessageModel =  new ErrorMessageModel();

  constructor(public eventDetailsService: EventDetailsService, public globalService: GlobalServiceRequests) { }

  ngOnInit() {
  }

  deleteReview(reviewId) {
      this.eventDetailsService.deleteReview(reviewId).subscribe(
        data => {
          this.reviewsList  = this.reviewsList.filter(elem => {
            return elem.id !== reviewId;
          });
        },
        error => {
          this.errorOnDeleteReview = this.globalService.distplayErrorObject(error.error.message, true, error.error.status, 'alert-warning');
        }
      );
  }

}
