import { Component, Input } from "@angular/core";
import * as data from "../../../../shared/data/data/dashboard/project";
import { RouterModule } from "@angular/router";
import { ClickOutsideDirective } from "../../../../shared/directive/click-outside.directive";

@Component({
  selector: "app-user-profile",
  standalone: true,
  imports : [RouterModule,ClickOutsideDirective],
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})

export class UserProfileComponent {

  public isShow: boolean = false;
  @Input() item: data.userProfileData[];

  clickOutside(): void {
    this.isShow = false;
  }
}
