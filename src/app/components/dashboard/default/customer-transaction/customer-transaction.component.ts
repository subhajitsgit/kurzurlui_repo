import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/general/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ClickOutsideDirective } from '../../../../shared/directive/click-outside.directive';

@Component({
  selector: 'app-customer-transaction',
  standalone:true,
  imports: [NgApexchartsModule,ClickOutsideDirective],
  templateUrl: './customer-transaction.component.html',
  styleUrls: ['./customer-transaction.component.scss']
})

export class CustomerTransactionComponent {

  public isShow:boolean = false;
  public customerTransaction = data.customerTransaction;

  clickOutside(): void {
    this.isShow = false;
  }
}
