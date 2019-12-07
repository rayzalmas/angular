import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { NetworkComponent } from './network/network.component';
import { ProgramComponent } from './program/program.component';
import { StructureComponent } from './structure/structure.component';

const routes: Routes = [
  { path: 'beranda', component: HomeComponent, pathMatch: 'full' },
  { path: 'kegiatan', loadChildren: () => import('./activities/activities.module').then(m => m.ActivitiesModule) },
  { path: 'artikel', loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule) },
  { path: 'berita', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) },
  { path: 'sejarah', component: HistoryComponent, pathMatch: 'full' },
  { path: 'jaringan', component: NetworkComponent, pathMatch: 'full' },
  { path: 'program-kerja', component: ProgramComponent, pathMatch: 'full' },
  { path: 'susunan-pengurus', component: StructureComponent, pathMatch: 'full' },
  { path: 'siaran-pens', loadChildren: () => import('./stream/stream.module').then(m => m.ActivitiesModule) },
  { path: 'tokoh', loadChildren: () => import('./figures/figures.module').then(m => m.FiguresModule) },
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
