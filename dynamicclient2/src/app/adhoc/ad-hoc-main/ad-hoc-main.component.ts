import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-hoc-main',
  templateUrl: './ad-hoc-main.component.html',
  styleUrls: ['./ad-hoc-main.component.scss']
})
export class AdHocMainComponent implements OnInit {
  
  events: string[] = [];
  opened: boolean;

  constructor() { }

  ngOnInit() {
  }

}
