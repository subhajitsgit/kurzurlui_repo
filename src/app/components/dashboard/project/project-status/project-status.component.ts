import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/dashboard/project';
import { ClickOutsideDirective } from '../../../../shared/directive/click-outside.directive';

@Component({
  selector: 'app-project-status',
  standalone: true,
  imports: [ClickOutsideDirective],
  templateUrl: './project-status.component.html',
  styleUrls: ['./project-status.component.scss']
})

export class ProjectStatusComponent {
    
  public isShow : boolean = false;
  public projectStatus = data.projectStatus;

  clickOutside(): void {
    this.isShow = false;
  }
}
