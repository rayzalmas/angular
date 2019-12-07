import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailStreamComponent } from './detail-stream/detail-stream.component';
import { StreamComponent } from './stream.component';

const routes: Routes = [
  { path: '', component: StreamComponent, pathMatch: 'full' },
  { path: ':slug', component: DetailStreamComponent, pathMatch: 'full' }
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
export class StreamRoutingModule { }
