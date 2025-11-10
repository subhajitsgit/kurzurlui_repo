import { Component } from '@angular/core';
import { defaultSwitch } from '../../../../../shared/data/data/forms/chechbox-radio';

@Component({
  selector: 'app-default-switches',
  standalone: true,
  imports: [],
  templateUrl: './default-switches.component.html',
  styleUrls: ['./default-switches.component.scss']
})

export class defaultSwitchesComponent {

  public defaultSwitch = defaultSwitch;

}
