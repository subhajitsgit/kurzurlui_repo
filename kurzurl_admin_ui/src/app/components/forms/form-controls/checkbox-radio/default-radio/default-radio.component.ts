import { Component } from '@angular/core';
import { defaultRadio } from '../../../../../shared/data/data/forms/chechbox-radio';

@Component({
  selector: 'app-default-radio',
  standalone: true,
  imports: [],
  templateUrl: './default-radio.component.html',
  styleUrls: ['./default-radio.component.scss']
})

export class DefaultRadioComponent {

  public defaultRadio = defaultRadio;

}
