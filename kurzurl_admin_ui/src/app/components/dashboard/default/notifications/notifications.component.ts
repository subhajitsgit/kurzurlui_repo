import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/dashboard/dashboard';
import { RouterModule } from '@angular/router';
import { ClickOutsideDirective } from '../../../../shared/directive/click-outside.directive';

@Component({
  selector: 'app-notifications',
  standalone:true,
  imports: [RouterModule,ClickOutsideDirective],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})

export class DashboardNotificationsComponent {

  public isShow:boolean = false;
  public Notifications = data.notifications;

  clickOutside(): void {
    this.isShow = false;
  }

}
