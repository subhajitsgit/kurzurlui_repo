import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/widgets/apex-chart';import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonSvgIconComponent } from '../../../../shared/components/common-svg-icon/common-svg-icon.component';
import { ClickOutsideDirective } from '../../../../shared/directive/click-outside.directive';
3

@Component({
  selector: 'app-visitors',
  standalone: true,
  imports:[NgApexchartsModule,CommonSvgIconComponent,ClickOutsideDirective],
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.scss']
})

export class VisitorsComponent {

  public isShow :boolean = false;
  public visitors = data.Visitors;

  clickOutside(): void {
    this.isShow = false;
  }
}
