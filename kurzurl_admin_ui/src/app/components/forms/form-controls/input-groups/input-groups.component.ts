import { Component } from '@angular/core';
import { BasicInputGroupsComponent } from './basic-input-groups/basic-input-groups.component';
import { ButtonAddonsComponent } from './button-addons/button-addons.component';
import { CheckboxesAndRadiosComponent } from './checkboxes-and-radios/checkboxes-and-radios.component';
import { CustomFileInputComponent } from './custom-file-input/custom-file-input.component';
import { CustomFormsComponent } from './custom-forms/custom-forms.component';
import { MultipleInputsComponent } from './multiple-inputs/multiple-inputs.component';
import { SegmentedButtonsComponent } from './segmented-buttons/segmented-buttons.component';
import { SizingComponent } from './sizing/sizing.component';
import { VariationOfAddonsComponent } from './variation-of-addons/variation-of-addons.component';
import { ButtonsWithDropdownsComponent } from './buttons-with-dropdowns/buttons-with-dropdowns.component';

@Component({
  selector: 'app-input-groups',
  standalone: true,
  imports: [BasicInputGroupsComponent,ButtonAddonsComponent,CheckboxesAndRadiosComponent,
    CustomFileInputComponent,CustomFormsComponent,MultipleInputsComponent,
    SegmentedButtonsComponent,SizingComponent,VariationOfAddonsComponent,ButtonsWithDropdownsComponent],
  templateUrl: './input-groups.component.html',
  styleUrls: ['./input-groups.component.scss']
})
export class InputGroupsComponent {

}
