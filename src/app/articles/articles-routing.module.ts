import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { ArticlesComponent } from './articles.component';

const routes: Routes = [
  { path: '', component: ArticlesComponent, pathMatch: 'full' },
  { path: ':slug', component: DetailArticleComponent, pathMatch: 'full' }
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
export class ArticlesRoutingModule { }
