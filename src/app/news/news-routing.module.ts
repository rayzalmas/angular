import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailNewsComponent } from './detail-news/detail-news.component';
import { NewsComponent } from './news.component';

const routes: Routes = [
  { path: ':slug', component: NewsComponent, pathMatch: 'full' },
  { path: ':slug/:id', component: DetailNewsComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class NewsRoutingModule { }
