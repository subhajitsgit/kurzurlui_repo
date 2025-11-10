import { Component } from '@angular/core';
import { chart4 } from '../../../../shared/data/chart/charts/chartlist';
import { ChartistModule } from 'ng-chartist';

@Component({
  selector: 'app-bi-polar-line-chart',
  standalone: true,
  imports : [ChartistModule],
  templateUrl: './bi-polar-line-chart.component.html',
  styleUrls: ['./bi-polar-line-chart.component.scss']
})

export class BiPolarLineChartComponent {

  public chart4 = chart4;

}
