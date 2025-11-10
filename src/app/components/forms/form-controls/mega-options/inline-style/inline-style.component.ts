import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/data/forms/forms-controls';

@Component({
  selector: 'app-inline-style',
  standalone: true,
  imports: [],
  templateUrl: './inline-style.component.html',
  styleUrls: ['./inline-style.component.scss']
})

export class InlineStyleComponent {

  public inlineStyle = data.inlineStyle;

}
