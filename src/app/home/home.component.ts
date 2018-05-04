import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HomeService} from './Services/HomeService';
import { EventModel } from './Model/eventModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private events: any = [];

  constructor(private http: HttpClient, private homeService: HomeService) {
    this.events = this.homeService.getEvents();
  }


  ngOnInit() {
  }

}
