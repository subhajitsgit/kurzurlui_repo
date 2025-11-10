import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/accordion';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-flush-accordion',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './flush-accordion.component.html',
  styleUrls: ['./flush-accordion.component.scss']
})

export class FlushAccordionComponent {

  public flushAccordionData = Data.flushAccordionData;


}
