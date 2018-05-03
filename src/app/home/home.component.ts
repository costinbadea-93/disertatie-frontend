import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "./Services/UserService"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private username : string;
  private password : string;

  constructor(private http: HttpClient, private userService:UserService){
  }

  ngOnInit(): void {
  }

  private loginUser(username: string, password : string) : void {
    console.log(username, password);
    this.userService.obtainAccessToken(username,password);
  }
}
