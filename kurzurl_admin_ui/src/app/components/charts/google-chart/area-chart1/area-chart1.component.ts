import { Component } from '@angular/core';
import { areaChart1 } from '../../../../shared/data/chart/charts/google-chart';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
  selector: 'app-area-chart1',
  standalone: true,
  imports: [Ng2GoogleChartsModule],
  templateUrl: './area-chart1.component.html',
  styleUrls: ['./area-chart1.component.scss']
})

export class AreaChart1Component {

  public areaChart1 = areaChart1;


}
