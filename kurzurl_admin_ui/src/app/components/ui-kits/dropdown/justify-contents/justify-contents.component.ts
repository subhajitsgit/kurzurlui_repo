import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/dropdown';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-justify-contents',
  standalone: true,
  imports:[NgbDropdownModule],
  templateUrl: './justify-contents.component.html',
  styleUrls: ['./justify-contents.component.scss']
})

export class JustifyContentsComponent {

  public justifyDropdownData = Data.justifyDropdownData;

}
