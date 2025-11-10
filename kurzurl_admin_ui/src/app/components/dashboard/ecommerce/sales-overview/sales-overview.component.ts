import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/general/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ClickOutsideDirective } from '../../../../shared/directive/click-outside.directive';

@Component({
  selector: 'app-sales-overview',
  standalone: true,
  imports: [NgApexchartsModule,ClickOutsideDirective],
  templateUrl: './sales-overview.component.html',
  styleUrls: ['./sales-overview.component.scss']
})

export class SalesOverviewComponent {
   
  public isShow : boolean = false;
  public salesOverview = data.salesOverview;

   clickOutside(): void {
    this.isShow = false;
  }

}
