import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicChartComponent } from './dynamic-chart/dynamic-chart.component';

const routes: Routes = [
  { path: '', component: DynamicChartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicChartRoutingModule { }
