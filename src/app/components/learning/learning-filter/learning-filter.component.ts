import { Component } from '@angular/core';
import { FindCourseComponent } from './find-course/find-course.component';
import { CategoriesComponent } from './categories/categories.component';
import { UpcomingCoursesComponent } from './upcoming-courses/upcoming-courses.component';
import { ClickOutsideDirective } from '../../../shared/directive/click-outside.directive';

@Component({
  selector: 'app-learning-filter',
  standalone: true,
  imports:[FindCourseComponent,CategoriesComponent,UpcomingCoursesComponent,ClickOutsideDirective],
  templateUrl: './learning-filter.component.html',
  styleUrls: ['./learning-filter.component.scss']
})

export class LearningFilterComponent {

  public isOpen : boolean = false;

  Outside(){
    this.isOpen = false;  
   }
}
