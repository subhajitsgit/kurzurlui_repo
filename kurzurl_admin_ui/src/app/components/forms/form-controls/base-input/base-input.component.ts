import { Component } from '@angular/core';
import { BasicFloatingInputControlComponent } from './basic-floating-input-control/basic-floating-input-control.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { BasicHtmlInputControlComponent } from './basic-html-input-control/basic-html-input-control.component';
import { EdgesInputStyleComponent } from './edges-input-style/edges-input-style.component';
import { FileInputComponent } from './file-input/file-input.component';
import { FloatingFormComponent } from './floating-form/floating-form.component';
import { FormControlSizingComponent } from './form-control-sizing/form-control-sizing.component';
import { RaiseInputStyleComponent } from './raise-input-style/raise-input-style.component';
import { SelectSizingComponent } from '../select-sizing/select-sizing.component';
import { FlatInputStyleComponent } from './flat-input-style/flat-input-style.component';

@Component({
  selector: 'app-base-input',
  standalone: true,
  imports: [BasicFloatingInputControlComponent, BasicFormComponent, BasicHtmlInputControlComponent,
    EdgesInputStyleComponent, FileInputComponent, FloatingFormComponent, FormControlSizingComponent,
    RaiseInputStyleComponent,SelectSizingComponent,FlatInputStyleComponent],
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.scss']
})

export class BaseInputComponent {

}
