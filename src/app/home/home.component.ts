import { Component, OnInit } from '@angular/core';
import { ARTICLES } from '../articles/articles-model/articles-mock';
import { ACTIVITIES } from '../activities/activities-model/activities-mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles = ARTICLES;
  activities = ACTIVITIES;

  constructor() {}

  ngOnInit() {
  }

}
