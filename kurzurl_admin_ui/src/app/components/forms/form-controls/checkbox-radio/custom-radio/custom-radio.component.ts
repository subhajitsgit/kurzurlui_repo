import { Component } from '@angular/core';
import { BorderedRadio, IconsRadio, FilledRadio } from '../../../../../shared/data/data/forms/chechbox-radio';

@Component({
  selector: 'app-custom-radio',
  standalone: true,
  imports: [],
  templateUrl: './custom-radio.component.html',
  styleUrls: ['./custom-radio.component.scss']
})

export class CustomRadioComponent {

  public BorderedRadio = BorderedRadio;
  public IconsRadio = IconsRadio;
  public FilledRadio = FilledRadio;

}
