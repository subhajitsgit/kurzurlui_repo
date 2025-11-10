import { Component } from "@angular/core";
import { chart9 } from "../../../../shared/data/chart/charts/chartlist";
import { ChartistModule } from "ng-chartist";

@Component({
  selector: "app-xreme-responsive-configuration",
  standalone: true,
  imports : [ChartistModule],
  templateUrl: "./xreme-responsive-configuration.component.html",
  styleUrls: ["./xreme-responsive-configuration.component.scss"],
})

export class XremeResponsiveConfigurationComponent {
  public chart9 = chart9;
}
