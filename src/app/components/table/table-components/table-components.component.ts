import { Component } from '@angular/core';
import { AlertsComponent } from './alerts/alerts.component';
import { BadgesComponent } from './badges/badges.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputComponent } from './input/input.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component';
import { SelectComponent } from './select/select.component';
import { SwitchComponent } from './switch/switch.component';
import { TooltipTriggersComponent } from './tooltip-triggers/tooltip-triggers.component';
import { UIComponentsComponent } from './ui-components/ui-components.component';

@Component({
  selector: 'app-table-components',
  standalone: true,
  imports:[AlertsComponent,BadgesComponent,CheckboxComponent,
    InputComponent,ProgressbarComponent,RadioButtonsComponent,
    SelectComponent,SwitchComponent,TooltipTriggersComponent,UIComponentsComponent],
  templateUrl: './table-components.component.html',
  styleUrls: ['./table-components.component.scss']
})

export class TableComponentsComponent {

}
