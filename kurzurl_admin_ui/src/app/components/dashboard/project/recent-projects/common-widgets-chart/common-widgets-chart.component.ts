import { Component, Input } from '@angular/core';
import { ChartOptions } from '../../../../../shared/data/chart/general/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-common-widgets-chart',
  standalone: true,
  imports : [NgApexchartsModule],
  templateUrl: './common-widgets-chart.component.html',
  styleUrls: ['./common-widgets-chart.component.scss']
})

export class CommonWidgetsChartComponent {

  @Input() item: ChartOptions |any;

}
