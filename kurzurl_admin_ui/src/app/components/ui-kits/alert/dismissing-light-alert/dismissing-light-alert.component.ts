import { Component, input } from '@angular/core';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-dismissing-light-alert',
  standalone: true,
  imports: [FeatherIconsComponent],
  templateUrl: './dismissing-light-alert.component.html',
  styleUrls: ['./dismissing-light-alert.component.scss']
})

export class DismissingLightAlertComponent {

  public isShow : boolean = true;
  public alertMessage = input();
}
