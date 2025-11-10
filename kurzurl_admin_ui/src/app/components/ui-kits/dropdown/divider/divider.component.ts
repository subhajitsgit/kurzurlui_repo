import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/dropdown';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports:[NgbDropdownModule],
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})

export class DividerComponent {

  public dividerDropdownData = Data.dividerDropdownData;

}
