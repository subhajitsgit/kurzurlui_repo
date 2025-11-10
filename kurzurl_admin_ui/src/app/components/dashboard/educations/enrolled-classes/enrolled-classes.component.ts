import { Component } from "@angular/core";
import * as data from "../../../../shared/data/data/dashboard/education";
import { ClickOutsideDirective } from "../../../../shared/directive/click-outside.directive";

@Component({
  selector: "app-enrolled-classes",
  standalone: true,
  imports: [ClickOutsideDirective],
  templateUrl: "./enrolled-classes.component.html",
  styleUrls: ["./enrolled-classes.component.scss"],
})

export class EnrolledClassesComponent {

  public isShow: boolean = false;
  public enrolledClasses = data.enrolledClasses;

  open(id: number) {
    this.enrolledClasses.filter((data) => {
      if (data.id == id) {
        data.active = !data.active;
      }
    });
  }

  clickOutside(): void {
    this.isShow = false;
  }

}
