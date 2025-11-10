import { Component } from '@angular/core';
import { BrowserDefaultsComponent } from './browser-defaults/browser-defaults.component';
import { FormValidationsComponent } from './form-validations/form-validations.component';
import { TooltipFormComponent } from './tooltip-form/tooltip-form.component';

@Component({
  selector: 'app-validation-form',
  standalone:true,
  imports:[BrowserDefaultsComponent,FormValidationsComponent,TooltipFormComponent],
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.scss']
})

export class ValidationFormComponent {

}
