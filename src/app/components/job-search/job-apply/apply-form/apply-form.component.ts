import { Component } from '@angular/core';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { YourEducationComponent } from './your-education/your-education.component';
import { YourExperienceComponent } from './your-experience/your-experience.component';

@Component({
  selector: 'app-apply-form',
  standalone:true,
  imports:[PersonalDetailsComponent,UploadFilesComponent,YourEducationComponent,YourExperienceComponent],
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.scss']
})
export class ApplyFormComponent {

}
