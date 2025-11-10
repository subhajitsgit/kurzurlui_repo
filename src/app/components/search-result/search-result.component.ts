import { Component } from "@angular/core";
import { AllComponent } from "./all/all.component";
import { ImageComponent } from "./image/image.component";
import { VideoComponent } from "./video/video.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-search-result",
  standalone: true,
  imports:[ImageComponent,VideoComponent,AllComponent,CommonModule],
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.scss"],
})

export class SearchResultComponent {

  public openTab: string = "all";

  tabbed(val: string) {
    this.openTab = val;
  }
  
}
