import { Component } from '@angular/core';
import { basicAreaChart } from '../../../../shared/data/chart/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-basic-area-chart',
  standalone : true,
  imports:[NgApexchartsModule],
  templateUrl: './basic-area-chart.component.html',
  styleUrls: ['./basic-area-chart.component.scss']
})

export class BasicAreaChartComponent {

   public basicAreaChart = basicAreaChart;

}
