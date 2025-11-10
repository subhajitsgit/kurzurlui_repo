import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile-intro',
  standalone:true,
  imports: [NgbCollapseModule],
  templateUrl: './profile-intro.component.html',
  styleUrls: ['./profile-intro.component.scss']
})

export class ProfileIntroComponent {
  
  public isCollapsed = false;

}
