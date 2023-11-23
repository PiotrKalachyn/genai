import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: 'dynamic-chart', loadChildren: () => import('./dynamic-chart/dynamic-chart.module').then(m => m.DynamicChartModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
