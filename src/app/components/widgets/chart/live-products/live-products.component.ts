import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/widgets/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-live-products',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './live-products.component.html',
  styleUrls: ['./live-products.component.scss']
})

export class LiveProductsComponent {

  public liveProducts = data.liveProducts;

}
