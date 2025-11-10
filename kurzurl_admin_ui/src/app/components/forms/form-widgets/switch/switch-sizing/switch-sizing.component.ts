import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/data/forms/form-widgets';

@Component({
  selector: 'app-switch-sizing',
  standalone: true,
  imports: [],
  templateUrl: './switch-sizing.component.html',
  styleUrls: ['./switch-sizing.component.scss']
})

export class SwitchSizingComponent {

  public switchSizingData = data.switchSizing;

}
