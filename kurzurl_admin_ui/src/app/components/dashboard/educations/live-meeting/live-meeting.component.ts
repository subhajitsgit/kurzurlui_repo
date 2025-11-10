import { Component } from '@angular/core';
import { ClickOutsideDirective } from '../../../../shared/directive/click-outside.directive';

@Component({
  selector: 'app-live-meeting',
  standalone: true,
  imports: [ClickOutsideDirective],
  templateUrl: './live-meeting.component.html',
  styleUrls: ['./live-meeting.component.scss']
})

export class LiveMeetingComponent {

  public isShow :boolean = false;
  
  clickOutside(): void {
    this.isShow = false;
  }
}
