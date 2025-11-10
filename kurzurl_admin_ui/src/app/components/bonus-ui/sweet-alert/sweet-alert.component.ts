import { Component } from '@angular/core';
import { AJAXRequestMovieComponent } from './ajax-request-movie/ajax-request-movie.component';
import { AutoCloseTimerComponent } from './auto-close-timer/auto-close-timer.component';
import { BasicExampleComponent } from './basic-example/basic-example.component';
import { DangerAlertComponent } from './danger-alert/danger-alert.component';
import { InfoAlertComponent } from './info-alert/info-alert.component';
import { PikachuAlertComponent } from './pikachu-alert/pikachu-alert.component';
import { QuestionsAlertComponent } from './questions-alert/questions-alert.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { TitleWithTextComponent } from './title-with-text/title-with-text.component';
import { UsernameAlertComponent } from './username-alert/username-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { WarningModeComponent } from './warning-mode/warning-mode.component';

@Component({
  selector: 'app-sweet-alert',
  standalone: true,
  imports: [AJAXRequestMovieComponent,AutoCloseTimerComponent,BasicExampleComponent,
    DangerAlertComponent,InfoAlertComponent,PikachuAlertComponent,
    QuestionsAlertComponent,SuccessMessageComponent,TitleWithTextComponent,
    UsernameAlertComponent,WarningAlertComponent,WarningModeComponent],
  templateUrl: './sweet-alert.component.html',
  styleUrls: ['./sweet-alert.component.scss']
})

export class SweetAlertComponent {

}
