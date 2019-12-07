import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailActivityComponent } from './detail-activity/detail-activity.component';
import { ActivitiesComponent } from './activities.component';

const routes: Routes = [
  { path: '', component: ActivitiesComponent, pathMatch: 'full' },
  { path: ':slug', component: DetailActivityComponent, pathMatch: 'full' }
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
export class ActivitiesRoutingModule { }
