import { Component } from '@angular/core';
import { radialBarChart } from '../../../../shared/data/chart/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-radial-bar-chart',
  standalone : true,
  imports:[NgApexchartsModule],
  templateUrl: './radial-bar-chart.component.html',
  styleUrls: ['./radial-bar-chart.component.scss']
})

export class RadialBarChartComponent {

  public radarChart = radialBarChart;


}
