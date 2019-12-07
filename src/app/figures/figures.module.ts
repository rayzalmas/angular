import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiguresRoutingModule } from './figures-routing.module';
import { FiguresComponent } from './figures.component';
import { DetailFigureComponent } from './detail-figure/detail-figure.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    FiguresComponent,
    DetailFigureComponent
  ],
  imports: [
    CommonModule,
    FiguresRoutingModule,
    SharedModule
  ]
})
export class FiguresModule { }
