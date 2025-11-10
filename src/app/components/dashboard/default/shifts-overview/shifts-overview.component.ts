import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/general/apex-chart';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ClickOutsideDirective } from '../../../../shared/directive/click-outside.directive';

@Component({
  selector: 'app-shifts-overview',
  standalone:true,
  imports: [CommonModule,NgApexchartsModule,ClickOutsideDirective],
  templateUrl: './shifts-overview.component.html',
  styleUrls: ['./shifts-overview.component.scss']
})

export class ShiftsOverviewComponent {

  public isShow : boolean = false;
  public isLocation: boolean = false;
  public shiftsOverview = data.shiftsOverview;

  clickOutside(){
    this.isLocation = false;
  }

  clickOutsides(){
    this.isShow = false;
  }
  
}
