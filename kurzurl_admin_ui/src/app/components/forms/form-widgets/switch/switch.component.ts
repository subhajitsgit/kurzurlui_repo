import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/forms/form-widgets';
import { CommonSwitchComponent } from './common-switch/common-switch.component';
import { CustomSwitchComponent } from './custom-switch/custom-switch.component';
import { DisabledOutlineSwitchComponent } from './disabled-outline-switch/disabled-outline-switch.component';
import { SwitchSizingComponent } from './switch-sizing/switch-sizing.component';
import { SwitchWithIconsComponent } from './switch-with-icons/switch-with-icons.component';
import { VariationOfSwitchesComponent } from './variation-of-switches/variation-of-switches.component';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [CommonSwitchComponent,CustomSwitchComponent,DisabledOutlineSwitchComponent,
    SwitchSizingComponent,SwitchWithIconsComponent,VariationOfSwitchesComponent],
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})

export class SwitchComponent {

  public IconSwitchButton = data.iconSwitchButton;
  public uncheckedSwitchButton = data.uncheckedSwitch;
  public borderedIconButton = data.borderWithIcon;

}
