import { Component } from '@angular/core';
import { AddUpdateProjectsComponent } from './add-update-projects/add-update-projects.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MyProfilesComponent } from './my-profiles/my-profiles.component';

@Component({
  selector: 'app-users-edits',
  standalone: true,
  imports:[AddUpdateProjectsComponent,EditProfileComponent,MyProfilesComponent],
  templateUrl: './users-edits.component.html',
  styleUrls: ['./users-edits.component.scss']
})
export class UsersEditsComponent {

}
