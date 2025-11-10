import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/dashboard/dashboard';
import { RouterModule } from '@angular/router';
import { ClickOutsideDirective } from '../../../../shared/directive/click-outside.directive';

@Component({
  selector: 'app-active-members',
  standalone:true,
  imports: [RouterModule,ClickOutsideDirective],
  templateUrl: './active-members.component.html',
  styleUrls: ['./active-members.component.scss']
})

export class ActiveMembersComponent {
   
  public isShow:boolean = false;
  public activeMembers = data.activeMembers;

  clickOutside(): void {
    this.isShow = false;
  }

}
