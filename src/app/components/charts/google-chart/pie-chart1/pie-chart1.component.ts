import { Component } from '@angular/core';
import { pieChart1 } from '../../../../shared/data/chart/charts/google-chart';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
  selector: 'app-pie-chart1',
  standalone: true,
  imports: [Ng2GoogleChartsModule],
  templateUrl: './pie-chart1.component.html',
  styleUrls: ['./pie-chart1.component.scss']
})

export class PieChart1Component {

  public pieChart1 = pieChart1;

}
