import { Component, Input } from '@angular/core';
import  * as data from '../../../../shared/data/chart/widgets/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-common-top-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './common-top-chart.component.html',
  styleUrls: ['./common-top-chart.component.scss']
})

export class CommonTopChartComponent {

   @Input() item : data.ChartOptions | any;

}
