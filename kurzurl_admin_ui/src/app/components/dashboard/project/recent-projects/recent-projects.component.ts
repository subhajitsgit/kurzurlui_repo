import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as data from '../../../../shared/data/data/dashboard/project';
import { ClickOutsideDirective } from '../../../../shared/directive/click-outside.directive';
import { CommonWidgetsChartComponent } from './common-widgets-chart/common-widgets-chart.component';

@Component({
  selector: 'app-recent-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, CommonWidgetsChartComponent, ClickOutsideDirective],
  templateUrl: './recent-projects.component.html',
  styleUrls: ['./recent-projects.component.scss']
})

export class RecentProjectsComponent {

  public isCalender: boolean = false;
  public tableData = data.tableData;

  openMenu(id: number) {
    this.tableData.filter((data) => {
      if (data.id === id) {
         return data.active = !data.active;
      }
      return data
    })
  }

}
