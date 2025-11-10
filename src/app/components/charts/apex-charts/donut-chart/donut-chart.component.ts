import { Component } from '@angular/core';
import { dountChart } from '../../../../shared/data/chart/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-donut-chart',
  standalone : true,
  imports:[NgApexchartsModule],
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})

export class DonutChartComponent {

  public donutChart = dountChart;


}
