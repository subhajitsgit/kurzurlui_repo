import { Component } from '@angular/core';
import { findCourse } from '../../../../shared/data/data/learning/learning';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-find-course',
  standalone: true,
  imports:[FeatherIconsComponent,NgbCollapseModule],
  templateUrl: './find-course.component.html',
  styleUrls: ['./find-course.component.scss']
})

export class FindCourseComponent {

  public findCourse = findCourse;
  public isCollapsed = false;

}
