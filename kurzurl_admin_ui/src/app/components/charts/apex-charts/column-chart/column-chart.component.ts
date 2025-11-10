import { Component } from '@angular/core';
import { columnChart } from '../../../../shared/data/chart/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-column-chart',
  standalone : true,
  imports:[NgApexchartsModule],
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})

export class ColumnChartComponent {

  public columnChart = columnChart;


}
