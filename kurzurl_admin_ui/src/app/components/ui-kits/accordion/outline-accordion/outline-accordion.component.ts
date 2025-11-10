import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';
import * as Data from '../../../../shared/data/data/ui-kits/accordion';

@Component({
  selector: 'app-outline-accordion',
  standalone: true,
  imports: [NgbAccordionModule,FeatherIconsComponent],
  templateUrl: './outline-accordion.component.html',
  styleUrls: ['./outline-accordion.component.scss']
})

export class OutlineAccordionComponent {

  public simpleAccordionData = Data.simpleAccordionData;

}
