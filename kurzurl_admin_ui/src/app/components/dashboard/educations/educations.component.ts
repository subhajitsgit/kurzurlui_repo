import { Component } from '@angular/core';
import { ActiveMembersComponent } from '../default/active-members/active-members.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { EnrolledClassesComponent } from './enrolled-classes/enrolled-classes.component';
import { FeaturedCoursesComponent } from './featured-courses/featured-courses.component';
import { LiveMeetingComponent } from './live-meeting/live-meeting.component';
import { MonthlyAttendanceReportComponent } from './monthly-attendance-report/monthly-attendance-report.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { StudyStatisticsComponent } from './study-statistics/study-statistics.component';
import { CommonEducationDataComponent } from './common-education-data/common-education-data.component';
import { ActivelyHoursComponent } from './actively-hours/actively-hours.component';

@Component({
  selector: 'app-educations',
  standalone: true,
  imports : [ActiveMembersComponent,AssignmentsComponent,CommonEducationDataComponent,
    EnrolledClassesComponent,FeaturedCoursesComponent,ActivelyHoursComponent,
    LiveMeetingComponent,MonthlyAttendanceReportComponent,
    ScheduleComponent,StudyStatisticsComponent
  ],
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss']
})

export class EducationsComponent {
}
