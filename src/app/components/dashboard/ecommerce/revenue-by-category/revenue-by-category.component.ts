import { Component } from '@angular/core';
  import * as data from '../../../../shared/data/chart/general/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ClickOutsideDirective } from '../../../../shared/directive/click-outside.directive';

@Component({
  selector: 'app-revenue-by-category',
  standalone: true,
  imports: [NgApexchartsModule,ClickOutsideDirective],
  templateUrl: './revenue-by-category.component.html',
  styleUrls: ['./revenue-by-category.component.scss']
})

export class RevenueByCategoryComponent {
  
  public isShow : boolean = false;
  public revenueByCategory = data.revenueByCategory;

  clickOutside(): void {
    this.isShow = false;
  }

}
