import { Component, OnInit } from '@angular/core';
import { ACTIVITIES } from '../activities-model/activities-mock';
import { ActivatedRoute } from '@angular/router';
import { Activities } from '../activities-model/activities';

declare let $:any;

@Component({
  selector: 'app-detail-activity',
  templateUrl: './detail-activity.component.html',
  styleUrls: ['./detail-activity.component.css']
})
export class DetailActivityComponent implements OnInit {
  activities: any;
  activity: any;
  id: Number;

  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe(param => {
      this.id = param['slug'];
      console.log(param['slug'])
    })
  }

  ngOnInit() {
    let art = [];
    for (let i = 0; i < ACTIVITIES.length; i++) {
      if(ACTIVITIES[i].id == this.id) {
        this.activity = ACTIVITIES[i];
      } else {
        art.push(ACTIVITIES[i]);
      }
    }
    this.activities = art;
  }

}
