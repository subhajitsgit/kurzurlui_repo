import { Component, Input } from "@angular/core";
import * as data from  '../../../../shared/data/data/dashboard/ecommerce';
import {commonTopData} from '../../../../shared/data/data/dashboard/ecommerce';
import { NgApexchartsModule } from "ng-apexcharts";
import { ClickOutsideDirective } from "../../../../shared/directive/click-outside.directive";

@Component({
  selector: "app-common-chart",
  standalone: true,
   imports : [NgApexchartsModule,ClickOutsideDirective],
  templateUrl: "./common-chart.component.html",
  styleUrls: ["./common-chart.component.scss"],
})

export class CommonChartComponent {

  public isShow: boolean = false;
  @Input() chatData:commonTopData | any;
  @Input() item: data.commonTopData[];

  clickOutside(): void {
    this.isShow = false;
  }

}
