import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NgApexchartsModule } from "ng-apexcharts";
import * as chartData from "../../../../shared/data/chart/general/apex-chart";
import * as data from "../../../../shared/data/data/dashboard/dashboard";
import { ClickOutsideDirective } from "../../../../shared/directive/click-outside.directive";

@Component({
  selector: "app-sales-statistic",
  standalone: true,
  imports: [NgApexchartsModule, CommonModule, ClickOutsideDirective],
  templateUrl: "./sales-statistic.component.html",
  styleUrls: ["./sales-statistic.component.scss"],
})
export class SalesStatisticComponent {

  public isShow: boolean = false;
  public chartData = chartData.salesStatistic;
  public Statistic = data.Statistic;
  public openId: number;
  public openedId: boolean = false;

  open(id: number) {
    this.Statistic.filter((data) => {
      if (data.id == id) {
        data.isActive = !data.isActive;
      }
    });
  }

  clickOutside(): void {
    this.isShow = false;
  }
}
