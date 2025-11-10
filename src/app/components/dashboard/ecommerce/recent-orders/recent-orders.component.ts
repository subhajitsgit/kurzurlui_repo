import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/dashboard/ecommerce';
import { RouterModule } from '@angular/router';
import { ClickOutsideDirective } from '../../../../shared/directive/click-outside.directive';

@Component({
  selector: 'app-recent-orders',
  standalone: true,
  imports: [RouterModule,ClickOutsideDirective],
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})

export class RecentOrdersComponent {

   public recentOrders = data.recentOrders;
   public isShow : boolean = false;

   clickOutside(): void {
    this.isShow = false;
  }
}
