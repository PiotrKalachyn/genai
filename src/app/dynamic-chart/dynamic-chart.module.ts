import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicChartRoutingModule } from './dynamic-chart-routing.module';
import { DynamicChartComponent } from './dynamic-chart/dynamic-chart.component';


@NgModule({
  imports: [
    CommonModule,
    DynamicChartRoutingModule
  ],
  declarations: [
    DynamicChartComponent
  ]
})
export class DynamicChartModule { }
