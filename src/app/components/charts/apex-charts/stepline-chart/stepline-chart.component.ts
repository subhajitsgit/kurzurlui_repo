import { Component } from '@angular/core';
import { stepLineChart } from '../../../../shared/data/chart/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-stepline-chart',
  standalone : true,
  imports:[NgApexchartsModule],
  templateUrl: './stepline-chart.component.html',
  styleUrls: ['./stepline-chart.component.scss']
})

export class SteplineChartComponent {

  public stepLineChart = stepLineChart;


}
