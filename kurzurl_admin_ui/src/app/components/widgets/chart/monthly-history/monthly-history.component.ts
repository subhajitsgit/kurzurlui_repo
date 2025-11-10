import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/widgets/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-monthly-history',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './monthly-history.component.html',
  styleUrls: ['./monthly-history.component.scss']
})

export class MonthlyHistoryComponent {

  public chartWidget4 = data.chartWidget4;


}
