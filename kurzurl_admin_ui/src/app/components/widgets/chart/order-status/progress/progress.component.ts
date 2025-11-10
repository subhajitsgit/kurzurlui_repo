import { Component, Input } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import * as data from '../../../../../shared/data/chart/widgets/apex-chart';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})

export class ProgressComponent {

   @Input() data:  data.ChartOptions | any;

}
