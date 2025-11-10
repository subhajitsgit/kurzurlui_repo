import { Component } from '@angular/core';
import { chart8 } from '../../../../shared/data/chart/charts/chartlist';
import { ChartistModule } from 'ng-chartist';

@Component({
  selector: 'app-horizontal-bar-chart',
  standalone: true,
  imports : [ChartistModule],
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.scss']
})

export class HorizontalBarChartComponent {

  public chart8 = chart8;

}
