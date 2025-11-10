import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClickOutsideDirective } from '../../../../shared/directive/click-outside.directive';

@Component({
  selector: 'app-running-events',
   standalone : true,
   imports : [RouterModule,ClickOutsideDirective],
  templateUrl: './running-events.component.html',
  styleUrls: ['./running-events.component.scss']
})

export class RunningEventsComponent {
   
  public isShow : boolean = false;

  clickOutside(): void {
    this.isShow = false;
  }
   
}
