import { Component, OnInit } from '@angular/core';
import { ARTICLES } from '../articles-model/articles-mock';
import { ActivatedRoute } from '@angular/router';
import { Articles } from '../articles-model/articles';

declare let $:any;

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
  articles: any;
  article: any;
  id: Number;

  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe(param => {
      this.id = param['slug'];
      console.log(param['slug'])
    })
  }

  ngOnInit() {
    let art = [];
    for (let i = 0; i < ARTICLES.length; i++) {
      if(ARTICLES[i].id == this.id) {
        this.article = ARTICLES[i];
      } else {
        art.push(ARTICLES[i]);
      }
    }
    this.articles = art;
  }

}
