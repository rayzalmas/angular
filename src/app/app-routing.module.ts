import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ActivitiesComponent } from './activities/activities.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'beranda', component: HomeComponent, pathMatch: 'full' },
  { path: 'kegiatan', component: ActivitiesComponent, pathMatch: 'full' },
  { path: 'artikel', loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule) },
  { path: '', redirectTo: '/beranda', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
