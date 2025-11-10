import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/dropdown';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports:[NgbDropdownModule],
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})

export class BasicComponent {

  public basicDropdownData = Data.basicDropdownData;

}
