import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { NetworkComponent } from './network/network.component';
import { ProgramComponent } from './program/program.component';
import { StructureComponent } from './structure/structure.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    NetworkComponent,
    ProgramComponent,
    StructureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
