import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/widgets/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-cryptocurrency-prices',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './cryptocurrency-prices.component.html',
  styleUrls: ['./cryptocurrency-prices.component.scss']
})

export class CryptocurrencyPricesComponent {

   public cryptoCurrencyPrices = data.cryptoCurrencyPrices
}
