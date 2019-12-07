import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRoutingModule } from './articles-routing.module';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { ArticlesComponent } from './articles.component';



@NgModule({
  declarations: [DetailArticleComponent, ArticlesComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ]
})
export class ArticlesModule { }
