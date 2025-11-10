import { Component } from "@angular/core";
import * as data from "../../../../shared/data/data/dashboard/project";
import { RouterModule } from "@angular/router";
import { ClickOutsideDirective } from "../../../../shared/directive/click-outside.directive";

@Component({
  selector: "app-clients-activity",
  standalone: true,
  imports: [RouterModule,ClickOutsideDirective],
  templateUrl: "./clients-activity.component.html",
  styleUrls: ["./clients-activity.component.scss"],
})

export class ClientsActivityComponent {

  public isShow: boolean = false;
  public isOpen: boolean = false;

  public ClientActivity = data.ClientActivity;

  open(id: number) {
    this.ClientActivity.filter((data) => {
      if (data.id == id) {
        data.active = !data.active;
      }
    });
  }

  clickOutside(): void {
    this.isShow = false;
  }
}
