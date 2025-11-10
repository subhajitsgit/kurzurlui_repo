import { Component } from '@angular/core';
import { CheckBoxButtonGroupComponent } from './check-box-button-group/check-box-button-group.component';
import { CommonLargeButtonGroupComponent } from './common-large-button-group/common-large-button-group.component';
import { CommonOutlineCustomButtonGroupComponent } from './common-outline-custom-button-group/common-outline-custom-button-group.component';
import { NestingComponent } from '../../ui-kits/grid/nesting/nesting.component';
import { RadioButtonGroupComponent } from './radio-button-group/radio-button-group.component';
import { VerticalComponent } from './vertical/vertical.component';
import { CommonDefaultButtonGroupComponent } from './common-default-button-group/common-default-button-group.component';
import { CommonOutlineButtonGroupComponent } from './common-outline-button-group/common-outline-button-group.component';

@Component({
  selector: 'app-button-group',
  standalone:true,
  imports:[CheckBoxButtonGroupComponent,CommonDefaultButtonGroupComponent,
    CommonOutlineButtonGroupComponent,CommonLargeButtonGroupComponent,
    CommonOutlineCustomButtonGroupComponent,NestingComponent,RadioButtonGroupComponent,VerticalComponent],
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss']
})

export class ButtonGroupComponent {

}
