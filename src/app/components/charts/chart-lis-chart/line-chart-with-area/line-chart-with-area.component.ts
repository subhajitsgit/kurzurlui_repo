import { Component } from '@angular/core';
import { chart5 } from '../../../../shared/data/chart/charts/chartlist';
import { ChartistModule } from 'ng-chartist';

@Component({
  selector: 'app-line-chart-with-area',
  standalone: true,
  imports : [ChartistModule],
  templateUrl: './line-chart-with-area.component.html',
  styleUrls: ['./line-chart-with-area.component.scss']
})

export class LineChartWithAreaComponent {


   public chart5 = chart5;

}
