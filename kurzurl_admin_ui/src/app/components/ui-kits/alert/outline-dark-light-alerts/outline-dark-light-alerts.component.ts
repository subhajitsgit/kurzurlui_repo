import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/alert';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-outline-dark-light-alerts',
  standalone: true,
  imports: [FeatherIconsComponent],
  templateUrl: './outline-dark-light-alerts.component.html',
  styleUrls: ['./outline-dark-light-alerts.component.scss']
})

export class OutlineDarkLightAlertsComponent {

  public outLinedAlert = Data.outLinedAlertData;

  closed(alertData : Data.outLinedAlert) {
    this.outLinedAlert.splice(this.outLinedAlert.indexOf(alertData), 1);
  }

}
