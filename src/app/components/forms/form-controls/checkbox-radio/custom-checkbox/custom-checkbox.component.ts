import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/forms/forms-controls';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-checkbox',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss']
})

export class CustomCheckboxComponent {

  public borderedCheckBox = Data.borderedCheckBox;
  public iconCheckBox = Data.iconCheckBox;
  public filledCheckBox = Data.filledCheckBox;
  
}
