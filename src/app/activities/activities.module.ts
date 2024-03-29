import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesRoutingModule } from './activities-routing.module';
import { DetailActivityComponent } from './detail-activity/detail-activity.component';
import { ActivitiesComponent } from './activities.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DetailActivityComponent, ActivitiesComponent],
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    SharedModule
  ]
})
export class ActivitiesModule { }
