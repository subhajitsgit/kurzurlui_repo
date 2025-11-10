import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/accordion';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-with-icons-accordion',
  standalone: true,
  imports:[NgbAccordionModule,FeatherIconsComponent],
  templateUrl: './with-icons-accordion.component.html',
  styleUrls: ['./with-icons-accordion.component.scss']
})

export class WithIconsAccordionComponent {

  public accordionWithIconData = Data.accordionWithIconData;


}
