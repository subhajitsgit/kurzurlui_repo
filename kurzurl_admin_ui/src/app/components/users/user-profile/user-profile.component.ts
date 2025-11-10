import { Component } from '@angular/core';
import { UserProfileFifthComponent } from './user-profile-fifth/user-profile-fifth.component';
import { UserProfileFirstComponent } from './user-profile-first/user-profile-first.component';
import { UserProfileFourthComponent } from './user-profile-fourth/user-profile-fourth.component';
import { UserProfileSecondComponent } from './user-profile-second/user-profile-second.component';
import { UserProfileThirdComponent } from './user-profile-third/user-profile-third.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports:[UserProfileFirstComponent,UserProfileFifthComponent,UserProfileFourthComponent,UserProfileSecondComponent,UserProfileThirdComponent],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

}
