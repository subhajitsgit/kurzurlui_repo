import { Component } from '@angular/core';
import { RadioToggleButtons } from '../../../../../shared/data/data/forms/chechbox-radio';

@Component({
  selector: 'app-radio-toggle-buttons',
  standalone: true,
  imports: [],
  templateUrl: './radio-toggle-buttons.component.html',
  styleUrls: ['./radio-toggle-buttons.component.scss']
})

export class RadioToggleButtonsComponent {

  public RadioToggleButtons = RadioToggleButtons;

}
