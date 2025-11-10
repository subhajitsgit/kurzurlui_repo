import { Component } from "@angular/core";
import { barChart } from "../../../../shared/data/chart/charts/google-chart";
import { Ng2GoogleChartsModule } from "ng2-google-charts";

@Component({
  selector: "app-bar-chart2",
  standalone: true,
  imports: [Ng2GoogleChartsModule],
  templateUrl: "./bar-chart2.component.html",
  styleUrls: ["./bar-chart2.component.scss"],
})

export class BarChart2Component {

  public barChart = barChart;
  
}
