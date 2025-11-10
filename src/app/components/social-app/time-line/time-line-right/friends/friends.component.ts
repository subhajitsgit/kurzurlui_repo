import { Component } from '@angular/core';
import * as data from "../../../../../shared/data/data/social-app/social-app";
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-friends',
  standalone:true,
  imports: [NgbCollapseModule],
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})

export class FriendsComponent {

  public isCollapsed = false;
  public Friends = data.Friends;

}
