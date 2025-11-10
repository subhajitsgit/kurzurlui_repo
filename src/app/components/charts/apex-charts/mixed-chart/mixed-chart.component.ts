import { Component } from '@angular/core';
import { mixedChart } from '../../../../shared/data/chart/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-mixed-chart',
  standalone : true,
  imports:[NgApexchartsModule],
  templateUrl: './mixed-chart.component.html',
  styleUrls: ['./mixed-chart.component.scss']
})

export class MixedChartComponent {

  public mixedChart = mixedChart; 


}
