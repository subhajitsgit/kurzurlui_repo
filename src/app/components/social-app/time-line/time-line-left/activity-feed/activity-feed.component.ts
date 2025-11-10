import { Component } from '@angular/core';
import * as data from "../../../../../shared/data/data/social-app/social-app";
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-activity-feed',
  standalone:true,
  imports: [NgbCollapseModule],
  templateUrl: './activity-feed.component.html',
  styleUrls: ['./activity-feed.component.scss']
})

export class ActivityFeedComponent {

   public isCollapsed = false;
   public activityFeedData = data.activityFeedData;

}
