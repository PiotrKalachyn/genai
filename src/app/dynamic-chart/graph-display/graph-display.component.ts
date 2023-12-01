import {Component, OnInit, ViewChild, ElementRef, Input, OnDestroy} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Chart, registerables} from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-graph-display',
  templateUrl: './graph-display.component.html',
  styleUrls: ['./graph-display.component.scss']
})
export class GraphDisplayComponent implements OnInit, OnDestroy {
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;
  @Input() dataObservable: Observable<Array<{ key: string, value: number }>>;
  chart: Chart;
  private subscription: Subscription;
  constructor() {
  }

  ngOnInit(): void {
    this.dataObservable.subscribe(data => {
        this.updateChart(data);
    });
  }

  updateChart(data: Array<{ key: string, value: number }>): void {
    if (this.chart) {
      this.chart.destroy(); // Destroy the existing chart
    }

    const ctx = this.canvas.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'bar', // or 'line', 'pie', etc.
      data: {
        labels: data.map(item => item.key),
        datasets: [{
          label: 'City Temperatures',
          data: data.map(item => item.value),
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
