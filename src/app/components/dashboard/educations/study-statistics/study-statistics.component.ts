import { Component } from "@angular/core";
import * as data from "../../../../shared/data/chart/general/apex-chart";
import { NgApexchartsModule } from "ng-apexcharts";
import { ClickOutsideDirective } from "../../../../shared/directive/click-outside.directive";

@Component({
  selector: "app-study-statistics",
  standalone: true,
  imports : [NgApexchartsModule,ClickOutsideDirective],
  templateUrl: "./study-statistics.component.html",
  styleUrls: ["./study-statistics.component.scss"],
})

export class StudyStatisticsComponent {

  public isShow : boolean = false;
  public studyStatistics = data.studyStatistics;

  clickOutside(): void {
    this.isShow = false;
  }
  
}
