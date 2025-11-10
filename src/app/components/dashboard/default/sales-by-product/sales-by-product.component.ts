import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/dashboard/dashboard';
import { RouterModule } from '@angular/router';
import { ClickOutsideDirective } from '../../../../shared/directive/click-outside.directive';

@Component({
  selector: 'app-sales-by-product',
  standalone:true,
  imports: [RouterModule,ClickOutsideDirective],
  templateUrl: './sales-by-product.component.html',
  styleUrls: ['./sales-by-product.component.scss']
})

export class SalesByProductComponent {

  public isShow:boolean = false;
  public salesByProduct = data.salesByProduct;

  clickOutside(): void {
    this.isShow = false;
  }

}
