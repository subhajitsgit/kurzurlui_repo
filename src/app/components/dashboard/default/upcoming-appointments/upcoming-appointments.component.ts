import { Component } from "@angular/core";
import * as data from "../../../../shared/data/data/dashboard/dashboard";
import { RouterModule } from "@angular/router";
import { CalendarDashboardComponent } from "../../widgets/calendar-dashboard/calendar-dashboard.component";

@Component({
  selector: "app-upcoming-appointments",
  standalone:true,
  imports: [RouterModule,CalendarDashboardComponent],
  templateUrl: "./upcoming-appointments.component.html",
  styleUrls: ["./upcoming-appointments.component.scss"],
})

export class UpcomingAppointmentsComponent {
	
  public upcomingAppointments = data.upcomingAppointments;

}
