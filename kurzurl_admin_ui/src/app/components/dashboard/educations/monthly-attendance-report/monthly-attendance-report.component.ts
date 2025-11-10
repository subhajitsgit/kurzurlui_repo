import { Component } from '@angular/core';
 import * as data from '../../../../shared/data/chart/general/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ClickOutsideDirective } from '../../../../shared/directive/click-outside.directive';

@Component({
  selector: 'app-monthly-attendance-report',
  standalone: true,
  imports: [NgApexchartsModule,ClickOutsideDirective],
  templateUrl: './monthly-attendance-report.component.html',
  styleUrls: ['./monthly-attendance-report.component.scss']
})

export class MonthlyAttendanceReportComponent {

  public isShow: boolean = false;
  public monthlyReportChart = data.monthlyReportChart;

  clickOutside(): void {
    this.isShow = false;
  }

}
