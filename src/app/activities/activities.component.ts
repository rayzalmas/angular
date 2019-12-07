import { Component, OnInit } from '@angular/core';
import { ACTIVITIES } from './activities-model/activities-mock';

@Component({
  selector: 'app-Activities',
  templateUrl: './Activities.component.html',
  styleUrls: ['./Activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  articles = ACTIVITIES;

  constructor() { }

  ngOnInit() {
    console.log(this.articles)
  }

}
