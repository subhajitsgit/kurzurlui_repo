import { Component } from '@angular/core';
import { AnimatedButtonsComponent } from './animated-buttons/animated-buttons.component';
import { BasicRadioAndCheckboxComponent } from './basic-radio-and-checkbox/basic-radio-and-checkbox.component';
import { CustomCheckboxComponent } from './custom-checkbox/custom-checkbox.component';
import { CustomRadioComponent } from './custom-radio/custom-radio.component';
import { DefaultCheckboxComponent } from './default-checkbox/default-checkbox.component';
import { DefaultRadioComponent } from './default-radio/default-radio.component';
import { defaultSwitchesComponent } from './default-switches/default-switches.component';
import { ImagesWithCheckboxComponent } from './images-with-checkbox/images-with-checkbox.component';
import { ImagesWithRadioComponent } from './images-with-radio/images-with-radio.component';
import { InlineInputTypesComponent } from './inline-input-types/inline-input-types.component';
import { OutlinedCheckboxStylesComponent } from './outlined-checkbox-styles/outlined-checkbox-styles.component';
import { RadioToggleButtonsComponent } from './radio-toggle-buttons/radio-toggle-buttons.component';

@Component({
  selector: 'app-checkbox-radio',
  standalone: true,
  imports: [AnimatedButtonsComponent,BasicRadioAndCheckboxComponent,CustomCheckboxComponent,
    CustomRadioComponent,DefaultCheckboxComponent,DefaultRadioComponent,defaultSwitchesComponent,
    ImagesWithCheckboxComponent,ImagesWithRadioComponent,InlineInputTypesComponent,OutlinedCheckboxStylesComponent,
    RadioToggleButtonsComponent
  ],
  templateUrl: './checkbox-radio.component.html',
  styleUrls: ['./checkbox-radio.component.scss']
})
export class CheckboxRadioComponent {

}
