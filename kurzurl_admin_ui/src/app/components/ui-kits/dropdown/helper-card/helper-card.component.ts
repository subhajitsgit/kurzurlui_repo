import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/dropdown';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-helper-card',
  standalone: true,
  imports:[NgbDropdownModule],
  templateUrl: './helper-card.component.html',
  styleUrls: ['./helper-card.component.scss']
})

export class HelperCardComponent {

  public helperCardData = Data.helperCardData;

}
