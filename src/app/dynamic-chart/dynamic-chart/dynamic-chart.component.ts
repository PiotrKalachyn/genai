import {Component} from '@angular/core';
import {interval, Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-dynamic-chart',
  templateUrl: './dynamic-chart.component.html',
  styleUrls: ['./dynamic-chart.component.scss']
})
export class DynamicChartComponent {

  cityTemperatures$: Observable<Array<{ key: string, value: number }>> = interval(3000).pipe(
    map(() => this.randomizeTemperatures())
  );

  private randomizeTemperatures(): Array<{ key: string, value: number }> {
    const cities = ['London', 'Paris', 'Berlin', 'Wrocław', 'Rome'];
    const baseTemperatures = [15, 20, 14, 25, 22]; // Base temperature for each city

    return cities.map((city, index) => ({
      key: city,
      value: baseTemperatures[index] + Math.floor(Math.random() * 10) // Randomize within a range of 10 degrees
    }));
  }
}
