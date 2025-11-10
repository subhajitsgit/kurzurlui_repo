import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/dashboard/ecommerce' 
import { NgApexchartsModule } from 'ng-apexcharts';
import { RouterModule } from '@angular/router';
import { ClickOutsideDirective } from '../../../../shared/directive/click-outside.directive';

@Component({
  selector: 'app-top-seller',
  standalone: true,
  imports: [NgApexchartsModule,RouterModule,ClickOutsideDirective],
  templateUrl: './top-seller.component.html',
  styleUrls: ['./top-seller.component.scss']
})

export class TopSellerComponent {

   public isShow : boolean = false;
   public TopSeller  = data.TopSeller;

   clickOutside(): void {
    this.isShow = false;
  }
   
}
