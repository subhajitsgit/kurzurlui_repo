import { Component } from "@angular/core";
import { FeatherIconsComponent } from "../../../../shared/components/feather-icons/feather-icons.component";

@Component({
  selector: "app-dismissing-dark-alert",
  standalone: true,
  imports: [FeatherIconsComponent],
  templateUrl: "./dismissing-dark-alert.component.html",
  styleUrls: ["./dismissing-dark-alert.component.scss"],
})

export class DismissingDarkAlertComponent {

  public isShow : boolean = true;

}
