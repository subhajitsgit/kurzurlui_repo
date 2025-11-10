import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/widgets/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-uses',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './uses.component.html',
  styleUrls: ['./uses.component.scss']
})

export class UsesComponent {

  public usesChart = data.usesChart;

}
