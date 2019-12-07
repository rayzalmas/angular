import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { DetailNewsComponent } from './detail-news/detail-news.component';
import { NewsComponent } from './news.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DetailNewsComponent, NewsComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule
  ]
})
export class NewsModule { }
