import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRoutingModule } from './articles-routing.module';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { ArticlesComponent } from './articles.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DetailArticleComponent, ArticlesComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    SharedModule
  ]
})
export class ArticlesModule { }
