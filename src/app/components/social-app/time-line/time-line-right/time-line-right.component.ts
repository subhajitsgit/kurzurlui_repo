import { Component } from '@angular/core';
import { FollowersComponent } from './followers/followers.component';
import { FollowingsComponent } from './followings/followings.component';
import { FriendsComponent } from './friends/friends.component';
import { LatestPhotosComponent } from './latest-photos/latest-photos.component';
import { ProfileIntroComponent } from './profile-intro/profile-intro.component';

@Component({
  selector: 'app-time-line-right',
  standalone:true,
  imports: [FollowersComponent,FollowingsComponent,FriendsComponent,LatestPhotosComponent,ProfileIntroComponent],
  templateUrl: './time-line-right.component.html',
  styleUrls: ['./time-line-right.component.scss']
})

export class TimeLineRightComponent {

}
