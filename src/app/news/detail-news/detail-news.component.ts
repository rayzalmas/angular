import { Component, OnInit } from '@angular/core';
import { NEWS } from '../news-model/news-mock';
import { ActivatedRoute } from '@angular/router';
import { News } from '../news-model/news';

declare let $:any;

@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.css']
})
export class DetailNewsComponent implements OnInit {
  listNews: any;
  news: any;
  type: String;
  id: Number;
  title: String;

  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe(param => {
      this.id = param['id'];
      this.type = param['slug'];
      let a = param['slug'];
      a = a.replace(/-/g, ' ');
      let splitStr = a.toLowerCase().split(' ');
      for(let i = 0; i < splitStr.length; i++) {
          splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      }
      this.title = splitStr.join(' ');
    })
  }

  ngOnInit() {
    let art = [];
    for (let i = 0; i < NEWS.length; i++) {
      if(NEWS[i].id == this.id) {
        this.news = NEWS[i];
      } else {
        if(NEWS[i].type == this.type) {
          art.push(NEWS[i]);
        }
      }
    }
    this.listNews = art;
  }

}
