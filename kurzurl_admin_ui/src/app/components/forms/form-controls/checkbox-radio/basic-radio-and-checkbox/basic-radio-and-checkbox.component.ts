import { Component } from '@angular/core';
import { basicRadioAndCheckbox } from '../../../../../shared/data/data/forms/chechbox-radio';

@Component({
  selector: 'app-basic-radio-and-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './basic-radio-and-checkbox.component.html',
  styleUrls: ['./basic-radio-and-checkbox.component.scss']
})

export class BasicRadioAndCheckboxComponent {

  public basicRadioAndCheckbox = basicRadioAndCheckbox;

}
