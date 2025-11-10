import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/widgets/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})

export class FinanceComponent {

  public finance = data.finance;

}
