import { Component, OnInit } from '@angular/core';
import { NEWS } from './news-model/news-mock';
import { News } from './news-model/news';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: any;
  title: String;
  type: String;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(param => {
      let a = param['slug']
      this.type = param['slug'];
      a = a.replace(/-/g, ' ');
      let splitStr = a.toLowerCase().split(' ');
      for(let i = 0; i < splitStr.length; i++) {
          splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      }
      this.title = splitStr.join(' ');
      let art = [];
      for (let i = 0; i < NEWS.length; i++) {
        if(NEWS[i].type == this.type) {
          art.push(NEWS[i]);
        }
      }
      this.news = art;
      console.log(this.news)
    })
  }

  ngOnInit() {
  }

}
