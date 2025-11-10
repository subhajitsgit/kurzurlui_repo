import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/dropdown';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdown-sizing',
  standalone: true,
  imports:[NgbDropdownModule],
  templateUrl: './dropdown-sizing.component.html',
  styleUrls: ['./dropdown-sizing.component.scss']
})

export class DropdownSizingComponent {

  public sizingDropdownData = Data.sizingDropdownData;

}
