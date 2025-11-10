import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/dropdown';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-split-dropdown',
  standalone: true,
  imports:[NgbDropdownModule],
  templateUrl: './split-dropdown.component.html',
  styleUrls: ['./split-dropdown.component.scss']
})

export class SplitDropdownComponent {

  public splitDropdownData = Data.splitDropdownData;

}
