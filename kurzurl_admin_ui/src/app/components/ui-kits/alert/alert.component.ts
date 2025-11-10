import { Component } from '@angular/core';
import { AdditionalContentComponent } from './additional-content/additional-content.component';
import { AlertsWithTextActionsComponent } from './alerts-with-text-actions/alerts-with-text-actions.component';
import { DarkThemeComponent } from './dark-theme/dark-theme.component';
import { DismissingDarkAlertComponent } from './dismissing-dark-alert/dismissing-dark-alert.component';
import { DismissingLightAlertComponent } from './dismissing-light-alert/dismissing-light-alert.component';
import { LeftBorderAlertComponent } from './left-border-alert/left-border-alert.component';
import { LightThemeComponent } from './light-theme/light-theme.component';
import { LiveAlertComponent } from './live-alert/live-alert.component';
import { OutlineDarkLightAlertsComponent } from './outline-dark-light-alerts/outline-dark-light-alerts.component';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [AdditionalContentComponent,AlertsWithTextActionsComponent,DarkThemeComponent,
    DismissingDarkAlertComponent,DismissingLightAlertComponent,
    LeftBorderAlertComponent,LightThemeComponent,LiveAlertComponent,OutlineDarkLightAlertsComponent
  ],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

}
