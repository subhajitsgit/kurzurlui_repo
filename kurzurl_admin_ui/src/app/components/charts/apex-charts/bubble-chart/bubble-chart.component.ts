import { Component } from '@angular/core';
import { bubbleChart } from '../../../../shared/data/chart/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-bubble-chart',
  standalone : true,
  imports:[NgApexchartsModule],
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.scss']
})

export class BubbleChartComponent {
  public bubbleChart = bubbleChart;

}
