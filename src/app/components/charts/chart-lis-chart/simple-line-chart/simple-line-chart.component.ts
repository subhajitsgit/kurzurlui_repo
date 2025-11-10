import { Component } from '@angular/core';
import { chart10 } from '../../../../shared/data/chart/charts/chartlist';
import { ChartistModule } from 'ng-chartist';

@Component({
  selector: 'app-simple-line-chart',
  standalone: true,
  imports : [ChartistModule],
  templateUrl: './simple-line-chart.component.html',
  styleUrls: ['./simple-line-chart.component.scss']
})

export class SimpleLineChartComponent {

   public chart10 = chart10;

}
