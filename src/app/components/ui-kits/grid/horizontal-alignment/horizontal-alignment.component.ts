import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/grid';

@Component({
  selector: 'app-horizontal-alignment',
  standalone: true,
  imports: [],
  templateUrl: './horizontal-alignment.component.html',
  styleUrls: ['./horizontal-alignment.component.scss']
})

export class HorizontalAlignmentComponent {

  public horizontialAlinmentData = Data.alignmentData;

}
