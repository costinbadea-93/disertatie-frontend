import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.css']
})
export class GlobalHeaderComponent implements OnInit {

  @Input() selected: string;
  public menuItems  = ['Home', 'AboutUs'];
  constructor() { }

  ngOnInit() {
  }

}
