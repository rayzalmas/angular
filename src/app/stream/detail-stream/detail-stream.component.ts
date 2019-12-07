import { Component, OnInit } from '@angular/core';
import { STREAMS } from '../stream-model/stream-mock';
import { ActivatedRoute } from '@angular/router';
import { Streams } from '../stream-model/stream';

declare let $:any;

@Component({
  selector: 'app-detail-stream',
  templateUrl: './detail-stream.component.html',
  styleUrls: ['./detail-stream.component.css']
})
export class DetailStreamComponent implements OnInit {
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
    for (let i = 0; i < STREAMS.length; i++) {
      if(STREAMS[i].id == this.id) {
        this.activity = STREAMS[i];
      } else {
        art.push(STREAMS[i]);
      }
    }
    this.activities = art;
  }

}
