import { Component } from "@angular/core";
import { CalendarDashboardComponent } from "../../widgets/calendar-dashboard/calendar-dashboard.component";
import { ClickOutsideDirective } from "../../../../shared/directive/click-outside.directive";

@Component({
  selector: "app-online-course-timeline",
  standalone: true,
  imports: [CalendarDashboardComponent,ClickOutsideDirective],
  templateUrl: "./online-course-timeline.component.html",
  styleUrls: ["./online-course-timeline.component.scss"],
})

export class OnlineCourseTimelineComponent {
	
  public isShow: boolean = false;

  clickOutside(): void {
    this.isShow = false;
  }

}
