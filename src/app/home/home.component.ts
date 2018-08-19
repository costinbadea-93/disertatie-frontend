import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HomeService} from './Services/HomeService';
import { EventModel } from '../GlobalUtils/GlobalModel/eventModel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private events: EventModel[] = [];
  public slelectedMenu: String = 'active';

  constructor(private http: HttpClient, private router: Router, private homeService: HomeService) {
  }

  ngOnInit() {
    this.homeService.getEvents().subscribe(data => {
         this.events =  data['content'];
    });
  }

  goToEventById(id: number): void {
    this.router.navigate(['/eventDetails', id]);
  }
}
