import { Component } from '@angular/core';
import { ChartjsBarChartComponent } from './chartjs-bar-chart/chartjs-bar-chart.component';
import { ChartjsLinechartComponent } from './chartjs-linechart/chartjs-linechart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { PolarChartComponent } from './polar-chart/polar-chart.component';
import { RadarChartComponent } from '../apex-charts/radar-chart/radar-chart.component';
import { RadarGraphComponent } from './radar-graph/radar-graph.component';

@Component({
  selector: 'app-chart-js-chart',
  standalone: true, 
  imports : [ChartjsBarChartComponent,ChartjsLinechartComponent,RadarGraphComponent,
    DoughnutChartComponent,LineGraphComponent,PolarChartComponent,RadarChartComponent],
  templateUrl: './chart-js-chart.component.html',
  styleUrls: ['./chart-js-chart.component.scss']
})
export class ChartJSChartComponent {

}
