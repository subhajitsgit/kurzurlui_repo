import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/dropdown';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rounded',
  standalone: true,
  imports:[NgbDropdownModule],
  templateUrl: './rounded.component.html',
  styleUrls: ['./rounded.component.scss']
})

export class RoundedComponent {

  public roundedDropdownData = Data.roundedDropdownData;

}
