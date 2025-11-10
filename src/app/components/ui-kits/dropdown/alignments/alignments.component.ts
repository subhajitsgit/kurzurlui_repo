import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/dropdown';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alignments',
  standalone: true,
  imports:[NgbDropdownModule],
  templateUrl: './alignments.component.html',
  styleUrls: ['./alignments.component.scss']
})

export class AlignmentsComponent {

  public alignmentDropdownData = Data.alignmentDropdownData;

}
