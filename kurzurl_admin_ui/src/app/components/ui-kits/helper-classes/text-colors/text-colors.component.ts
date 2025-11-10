import { Component } from '@angular/core';
import * as data  from '../../../../shared/data/data/ui-kits/helper-class';

@Component({
  selector: 'app-text-colors',
  standalone: true,
  imports: [],
  templateUrl: './text-colors.component.html',
  styleUrls: ['./text-colors.component.scss']
})

export class TextColorsComponent {

  public TextColorsData = data.TextColors;

}
