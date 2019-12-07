import { Component, OnInit } from '@angular/core';
import { ARTICLES } from '../../articles/articles-model/articles-mock';

declare let $:any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  articles = ARTICLES;

  constructor() { }

  ngOnInit() {
    let year = new Date().getFullYear;
    $(document).ready(function() {
      $("#myCalendar").ionCalendar({
        lang: "en",
        clickable: false
    });
    })
  }

}
