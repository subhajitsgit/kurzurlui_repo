import { Component } from '@angular/core';
import * as data from '../../../shared/data/chart/widgets/apex-chart';
import { CryptoAnnotationsComponent } from './crypto-annotations/crypto-annotations.component';
import { CryptocurrencyPricesComponent } from './cryptocurrency-prices/cryptocurrency-prices.component';
import { FinanceComponent } from './finance/finance.component';
import { LiveProductsComponent } from './live-products/live-products.component';
import { MonthlyHistoryComponent } from './monthly-history/monthly-history.component';
import { MonthlySalesComponent } from './monthly-sales/monthly-sales.component';
import { OrderStatusProcessesComponent } from './order-status-processes/order-status-processes.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { SkillStatusComponent } from './skill-status/skill-status.component';
import { StockMarketComponent } from './stock-market/stock-market.component';
import { TurnOverComponent } from './turn-over/turn-over.component';
import { UsesComponent } from './uses/uses.component';
import { CommonTopChartComponent } from './common-top-chart/common-top-chart.component';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonTopChartComponent,CryptoAnnotationsComponent,CryptocurrencyPricesComponent,
    FinanceComponent,LiveProductsComponent,MonthlyHistoryComponent,MonthlySalesComponent,
    OrderStatusComponent,OrderStatusProcessesComponent,SkillStatusComponent,
    StockMarketComponent,TurnOverComponent,UsesComponent
  ],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent {

  public chartWidget1 = data.chartWidget1;
  public chartWidget2 = data.chartWidget2;
  public chartWidget3 = data.chartWidget3;

}
