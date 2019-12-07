import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamRoutingModule } from './stream-routing.module';
import { DetailStreamComponent } from './detail-stream/detail-stream.component';
import { StreamComponent } from './stream.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DetailStreamComponent, StreamComponent],
  imports: [
    CommonModule,
    StreamRoutingModule,
    SharedModule
  ]
})
export class ActivitiesModule { }
