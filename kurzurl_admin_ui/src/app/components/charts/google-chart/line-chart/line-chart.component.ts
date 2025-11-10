import { Component } from '@angular/core';
import { lineChart } from '../../../../shared/data/chart/charts/google-chart';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [Ng2GoogleChartsModule],
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})

export class LineChartComponent {

  public lineChart = lineChart;

}
