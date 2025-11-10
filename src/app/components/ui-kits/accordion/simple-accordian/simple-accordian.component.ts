import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/accordion';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-simple-accordian',
  standalone: true,
  imports:[NgbAccordionModule,FeatherIconsComponent],
  templateUrl: './simple-accordian.component.html',
  styleUrls: ['./simple-accordian.component.scss']
})

export class SimpleAccordianComponent {

  public simpleAccordionData = Data.simpleAccordionData;

}
