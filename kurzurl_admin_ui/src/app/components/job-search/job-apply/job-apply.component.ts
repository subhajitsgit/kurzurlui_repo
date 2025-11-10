import { Component } from '@angular/core';
import { ApplyFormComponent } from './apply-form/apply-form.component';
import { JobFilterComponent } from '../job-filter/job-filter.component';

@Component({
  selector: 'app-job-apply',
  standalone:true,
  imports:[ApplyFormComponent,JobFilterComponent],
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.scss']
})
export class JobApplyComponent {

}
