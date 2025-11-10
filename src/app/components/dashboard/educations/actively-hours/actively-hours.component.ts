import { Component } from '@angular/core';
import * as data from "../../../../shared/data/chart/general/apex-chart";
import { NgApexchartsModule } from 'ng-apexcharts';
import { ClickOutsideDirective } from '../../../../shared/directive/click-outside.directive';

@Component({
  selector: 'app-actively-hours',
  standalone: true,
  imports:[NgApexchartsModule,ClickOutsideDirective],
  templateUrl: './actively-hours.component.html',
  styleUrls: ['./actively-hours.component.scss']
})

export class ActivelyHoursComponent {

  public isShow : boolean = false;
  public activelyHours = data.activelyHours;

  clickOutside(): void {
    this.isShow = false;
  }
  
}
