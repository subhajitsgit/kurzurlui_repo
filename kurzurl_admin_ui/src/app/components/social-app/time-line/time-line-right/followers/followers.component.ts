import { Component } from '@angular/core';
import * as data from "../../../../../shared/data/data/social-app/social-app";
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-followers',
  standalone:true,
  imports: [NgbCollapseModule],
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})

export class FollowersComponent {

  public isCollapsed = false;
  public Followers = data.Followers;

}
