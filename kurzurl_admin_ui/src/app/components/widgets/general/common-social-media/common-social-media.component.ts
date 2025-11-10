import { Component, Input } from '@angular/core';
import * as data from '../../../../shared/data/chart/widgets/apex-chart'
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-common-social-media',
  standalone: true,
  imports:[NgApexchartsModule],
  templateUrl: './common-social-media.component.html',
  styleUrls: ['./common-social-media.component.scss']
})

export class CommonSocialMediaComponent {
 
   @Input() item : data.ChartOptions | any;
}
