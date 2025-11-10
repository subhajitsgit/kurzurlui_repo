import { Component } from '@angular/core';
import { OutlinedCheckboxStyles } from '../../../../../shared/data/data/forms/chechbox-radio';

@Component({
  selector: 'app-outlined-checkbox-styles',
  standalone: true,
  imports: [],
  templateUrl: './outlined-checkbox-styles.component.html',
  styleUrls: ['./outlined-checkbox-styles.component.scss']
})

export class OutlinedCheckboxStylesComponent {

  public OutlinedCheckboxStyles = OutlinedCheckboxStyles;
}
