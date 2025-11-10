import { Component, Input } from '@angular/core';
import * as data from "../../../../shared/data/data/ui-kits/helper-class";

@Component({
  selector: 'app-common-margin-padding',
  standalone: true,
  imports: [],
  templateUrl: './common-margin-padding.component.html',
  styleUrls: ['./common-margin-padding.component.scss']
})

export class CommonMarginPaddingComponent {

  @Input() data: data.commonSide[];

}
