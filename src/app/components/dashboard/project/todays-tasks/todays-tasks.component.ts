import { Component } from "@angular/core";
import * as data from "../../../../shared/data/data/dashboard/project";
import { RouterModule } from "@angular/router";
import { ClickOutsideDirective } from "../../../../shared/directive/click-outside.directive";

@Component({
  selector: "app-todays-tasks",
  standalone: true,
  imports: [RouterModule,ClickOutsideDirective],
  templateUrl: "./todays-tasks.component.html",
  styleUrls: ["./todays-tasks.component.scss"],
})

export class TodaysTasksComponent {

  public isShow: boolean = false;
  public todaysTask = data.todaysTask;

  open(id: number) {
    this.todaysTask.filter((data) => {
      if (data.id == id) {
       data.active =!data.active;
      }
    });
  }

  clickOutside(): void {
    this.isShow = false;
  }
}
