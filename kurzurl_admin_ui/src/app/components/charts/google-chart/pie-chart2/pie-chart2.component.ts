import { Component } from '@angular/core';
import { pieChart2 } from '../../../../shared/data/chart/charts/google-chart';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
  selector: 'app-pie-chart2',
  standalone: true,
  imports: [Ng2GoogleChartsModule],
  templateUrl: './pie-chart2.component.html',
  styleUrls: ['./pie-chart2.component.scss']
})

export class PieChart2Component {

  public pieChart2 = pieChart2;

}
