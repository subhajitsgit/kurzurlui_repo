import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonSvgIconComponent } from '../../common-svg-icon/common-svg-icon.component';

@Component({
  selector: 'app-notifications',
  standalone:true,
  imports:[RouterModule,CommonSvgIconComponent],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})

export class NotificationsComponent {

  public isShow : boolean = false;

}
