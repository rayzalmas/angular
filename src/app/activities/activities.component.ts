import { Component, OnInit } from '@angular/core';
import { ACTIVITIES } from './activities-model/activities-mock';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  articles = ACTIVITIES;

  constructor() { }

  ngOnInit() {
    console.log(this.articles)
  }

}
