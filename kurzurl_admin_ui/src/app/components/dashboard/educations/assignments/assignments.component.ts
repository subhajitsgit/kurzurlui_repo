import { Component } from "@angular/core";
import * as data from "../../../../shared/data/data/dashboard/education";
import { RouterModule } from "@angular/router";
import { ClickOutsideDirective } from "../../../../shared/directive/click-outside.directive";

@Component({
  selector: "app-assignments",
  standalone: true,
  imports:[RouterModule,ClickOutsideDirective],
  templateUrl: "./assignments.component.html",
  styleUrls: ["./assignments.component.scss"],
})
export class AssignmentsComponent {

  public isShow: boolean = false;
  public Assignments = data.Assignments;

  open(id: string) {
    this.Assignments.filter((data) => {
      if (data.id == id) {
        data.active =!data.active
      }
    });
  }

  clickOutside(): void {
    this.isShow = false;
  }
}
