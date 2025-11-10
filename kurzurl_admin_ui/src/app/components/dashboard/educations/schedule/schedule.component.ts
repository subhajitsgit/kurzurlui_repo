import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { schedule } from '../../../../shared/data/chart/general/apex-chart';
import { ClickOutsideDirective } from '../../../../shared/directive/click-outside.directive';

@Component({
  selector: 'app-schedule',
  standalone:  true,
   imports : [NgApexchartsModule,ClickOutsideDirective],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent {

  public isShow: boolean = false;
  public schedule = schedule;

  clickOutside(): void {
    this.isShow = false;
  }
  
}
