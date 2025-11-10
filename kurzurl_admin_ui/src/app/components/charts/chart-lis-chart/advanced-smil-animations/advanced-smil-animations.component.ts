import { Component } from "@angular/core";
import { chart1 } from "../../../../shared/data/chart/charts/chartlist";
import { ChartistModule } from "ng-chartist";

@Component({
  selector: "app-advanced-smil-animations",
  standalone: true,
  imports : [ChartistModule],
  templateUrl: "./advanced-smil-animations.component.html",
  styleUrls: ["./advanced-smil-animations.component.scss"],
})
export class AdvancedSMILAnimationsComponent {
  public chart1 = chart1;
}
