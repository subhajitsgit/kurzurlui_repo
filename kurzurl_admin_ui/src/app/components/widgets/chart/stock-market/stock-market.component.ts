import { Component } from '@angular/core';
import * as  data from '../../../../shared/data/chart/widgets/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-stock-market',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './stock-market.component.html',
  styleUrls: ['./stock-market.component.scss']
})

export class StockMarketComponent {

   public stokeMarket = data.stokeMarket;
   
}
