import { Component } from '@angular/core';
import { pieChart } from '../../../../shared/data/chart/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-pie-chart',
  standalone : true,
  imports:[NgApexchartsModule],
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})

export class PieChartComponent {

  public pieChart = pieChart;

}
