import { Component } from '@angular/core';
import { columnChart2 } from '../../../../shared/data/chart/charts/google-chart';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
  selector: 'app-column-chart2',
  standalone: true,
  imports: [Ng2GoogleChartsModule],
  templateUrl: './column-chart2.component.html',
  styleUrls: ['./column-chart2.component.scss']
})

export class ColumnChart2Component {
  public columnChart2 = columnChart2;

}
