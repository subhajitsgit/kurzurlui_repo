import { Component } from '@angular/core';
import { NgbCollapseModule, NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { upcomingCourse } from '../../../../shared/data/data/learning/learning';

@Component({
  selector: 'app-upcoming-courses',
  standalone: true,
  imports: [NgbCollapseModule,NgbRatingModule],
  templateUrl: './upcoming-courses.component.html',
  styleUrls: ['./upcoming-courses.component.scss']
})

export class UpcomingCoursesComponent {

  public upcomingCourse = upcomingCourse;

  public isCollapsed = false;

  constructor(public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

}
