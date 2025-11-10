import { Component } from '@angular/core';
import * as data from '../../../shared/data/data/dashboard/project';
import { ClientsActivityComponent } from './clients-activity/clients-activity.component';
import { OnlineCourseTimelineComponent } from './online-course-timeline/online-course-timeline.component';
import { ProjectStatusComponent } from './project-status/project-status.component';
import { ProjectsOverviewComponent } from './projects-overview/projects-overview.component';
import { RecentProjectsComponent } from './recent-projects/recent-projects.component';
import { RunningEventsComponent } from './running-events/running-events.component';
import { TodaysTasksComponent } from './todays-tasks/todays-tasks.component';
import { TotalProjectComponent } from './total-project/total-project.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@Component({
  selector: 'app-project',
  standalone: true,
   imports : [ClientsActivityComponent,OnlineCourseTimelineComponent,
    ProjectStatusComponent,ProjectsOverviewComponent,RecentProjectsComponent,
    RunningEventsComponent,TodaysTasksComponent,TotalProjectComponent,UserProfileComponent
   ],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent {

  public websiteDesign = data.websiteDesign
  public socialPostDesign = data.socialPostDesign;
  public podcastWebDesign = data.podcastWebDesign;
  public cryptoDashboard = data.cryptoDashboard;

}
