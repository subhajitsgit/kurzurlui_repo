import { Component } from "@angular/core";
import * as data from "../../../../shared/data/data/social-app/social-app";
import { FeatherIconsComponent } from "../../../../shared/components/feather-icons/feather-icons.component";

@Component({
  selector: "app-about-center",
  standalone: true,
  imports: [FeatherIconsComponent],
  templateUrl: "./about-center.component.html",
  styleUrls: ["./about-center.component.scss"],
})

export class AboutCenterComponent {

  public peopleKnowYouData = data.peopleKnowYouData;
  public hobbiedAndInterestData = data.hobbiedAndInterestData;
  public eductionData = data.eductionData;
  public activityLog = data.activityLog;

}
