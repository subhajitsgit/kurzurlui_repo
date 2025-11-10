import { Component } from "@angular/core";
import { pieChart4 } from "../../../../shared/data/chart/charts/google-chart";
import { Ng2GoogleChartsModule } from "ng2-google-charts";

@Component({
  selector: "app-pie-chart4",
  standalone: true,
  imports: [Ng2GoogleChartsModule],
  templateUrl: "./pie-chart4.component.html",
  styleUrls: ["./pie-chart4.component.scss"],
})
export class PieChart4Component {
  public pieChart4 = pieChart4;
}
