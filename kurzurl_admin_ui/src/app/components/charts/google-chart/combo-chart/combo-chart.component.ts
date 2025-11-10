import { Component } from '@angular/core';
import { comboChart } from '../../../../shared/data/chart/charts/google-chart';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
  selector: 'app-combo-chart',
  standalone: true,
  imports: [Ng2GoogleChartsModule],
  templateUrl: './combo-chart.component.html',
  styleUrls: ['./combo-chart.component.scss']
})

export class ComboChartComponent {

  public comboChart = comboChart;
}
