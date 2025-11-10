import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/widgets/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-monthly-sales',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './monthly-sales.component.html',
  styleUrls: ['./monthly-sales.component.scss']
})

export class MonthlySalesComponent {

  public monthlySales = data.monthlySales;

}
