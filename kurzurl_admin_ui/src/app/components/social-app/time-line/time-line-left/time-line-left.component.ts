import { Component } from '@angular/core';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MutualFriendsComponent } from './mutual-friends/mutual-friends.component';
import { ActivityFeedComponent } from './activity-feed/activity-feed.component';

@Component({
  selector: 'app-time-line-left',
  standalone:true,
  imports: [MyProfileComponent,MutualFriendsComponent,ActivityFeedComponent],
  templateUrl: './time-line-left.component.html',
  styleUrls: ['./time-line-left.component.scss']
})
export class TimeLineLeftComponent {

}
