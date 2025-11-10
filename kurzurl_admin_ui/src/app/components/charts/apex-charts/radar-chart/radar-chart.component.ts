import { Component } from '@angular/core';
import { radarChart } from '../../../../shared/data/chart/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-radar-chart',
  standalone : true,
  imports:[NgApexchartsModule],
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})

export class RadarChartComponent {
  public radarChart = radarChart;

}
