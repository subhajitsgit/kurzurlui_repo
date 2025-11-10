import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/data/forms/forms-controls';

@Component({
  selector: 'app-without-borders-style',
  standalone: true,
  imports: [],
  templateUrl: './without-borders-style.component.html',
  styleUrls: ['./without-borders-style.component.scss']
})

export class WithoutBordersStyleComponent {

  public withoutBorderData = data.withoutBorder;

}
