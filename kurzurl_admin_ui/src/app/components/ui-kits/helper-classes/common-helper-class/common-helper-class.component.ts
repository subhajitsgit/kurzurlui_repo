import { Component, Input } from '@angular/core';
import * as data  from '../../../../shared/data/data/ui-kits/helper-class';

@Component({
  selector: 'app-common-helper-class',
  standalone: true,
  imports:[],
  templateUrl: './common-helper-class.component.html',
  styleUrls: ['./common-helper-class.component.scss']
})

export class CommonHelperClassComponent {

  @Input()data : data.commonHelperClasses [];

}
