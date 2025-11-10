import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/general/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ClickOutsideDirective } from '../../../../shared/directive/click-outside.directive';

@Component({
  selector: 'app-total-project',
  standalone: true,
  imports : [NgApexchartsModule,ClickOutsideDirective],
  templateUrl: './total-project.component.html',
  styleUrls: ['./total-project.component.scss']
})

export class TotalProjectComponent {

   public isShow:boolean = false;
   public totalProject =  data.totalProject;

   clickOutside(): void {
    this.isShow = false;
  }
   
}
