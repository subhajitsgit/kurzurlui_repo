import { Component } from '@angular/core';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-left-border-alert',
  standalone: true,
  imports: [FeatherIconsComponent],
  templateUrl: './left-border-alert.component.html',
  styleUrls: ['./left-border-alert.component.scss']
})

export class LeftBorderAlertComponent {

  public isShow : boolean = true;
  

}
