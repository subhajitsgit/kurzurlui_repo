import { Component } from '@angular/core';
import * as data from "../../../../../shared/data/data/social-app/social-app";
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-followings',
  standalone:true,
  imports: [NgbCollapseModule],
  templateUrl: './followings.component.html',
  styleUrls: ['./followings.component.scss']
})

export class FollowingsComponent {

  public isCollapsed = false;
  public Following = data.Following;


}
