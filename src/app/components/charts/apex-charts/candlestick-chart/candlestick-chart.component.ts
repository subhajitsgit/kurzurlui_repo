import { Component } from '@angular/core';
import { candelsStickChart } from '../../../../shared/data/chart/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-candlestick-chart',
  standalone : true,
  imports:[NgApexchartsModule],
  templateUrl: './candlestick-chart.component.html',
  styleUrls: ['./candlestick-chart.component.scss']
})

export class CandlestickChartComponent {

  public candlestickChart = candelsStickChart;


}
