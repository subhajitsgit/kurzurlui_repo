import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/data/forms/form-widgets';

@Component({
  selector: 'app-switch-with-icons',
  standalone: true,
  imports: [],
  templateUrl: './switch-with-icons.component.html',
  styleUrls: ['./switch-with-icons.component.scss']
})

export class SwitchWithIconsComponent {

  public switchIconSizingData = data.switchIconSizingData;


}
