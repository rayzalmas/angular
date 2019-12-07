import { Component, OnInit } from '@angular/core';
import { STREAMS } from './stream-model/stream-mock';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit {
  articles = STREAMS;

  constructor() { }

  ngOnInit() {
    console.log(this.articles)
  }

}
