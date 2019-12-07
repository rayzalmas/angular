import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FiguresComponent } from './figures.component';
import { DetailFigureComponent } from './detail-figure/detail-figure.component';

const routes: Routes = [
  { path: '', component: FiguresComponent, pathMatch: 'full' },
  { path: ':slug', component: DetailFigureComponent, pathMatch: 'full' }
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
export class FiguresRoutingModule { }
