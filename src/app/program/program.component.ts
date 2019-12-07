import { Component, OnInit } from '@angular/core';
import { ACTIVITIES } from '../activities/activities-model/activities-mock';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  activities = ACTIVITIES;

  constructor() { }

  ngOnInit() {
  }

}
