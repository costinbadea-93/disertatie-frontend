import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    let headers = {};
    headers['Content-Type'] =  'text/plain;charset=UTF-8';
    headers['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOlt7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifV0sImlhdCI6MTUyNTI1OTE2MiwiZXhwIjoxNTI1MjYyNzYyfQ.lz_gP5CfK71fG-S9Iu-LrTG1pzEmIBMk5DsuFoPxAPs`;
    headers['Access-Control-Allow-Origin'] = "*";
    console.log(headers);
    this.http.get('http://localhost:9000/event/getEvents', {headers: headers}).subscribe(data => {
      console.log(data);
    });
  }

}
