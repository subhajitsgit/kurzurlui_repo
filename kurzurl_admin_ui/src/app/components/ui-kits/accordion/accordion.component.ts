import { Component } from '@angular/core';
import { CollapseAccordionComponent } from './collapse-accordion/collapse-accordion.component';
import { FlushAccordionComponent } from './flush-accordion/flush-accordion.component';
import { HorizontalAccordionComponent } from './horizontal-accordion/horizontal-accordion.component';
import { MultipleCollapseAccordionComponent } from './multiple-collapse-accordion/multiple-collapse-accordion.component';
import { OutlineAccordionComponent } from './outline-accordion/outline-accordion.component';
import { SimpleAccordianComponent } from './simple-accordian/simple-accordian.component';
import { WithIconsAccordionComponent } from './with-icons-accordion/with-icons-accordion.component';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CollapseAccordionComponent,FlushAccordionComponent,HorizontalAccordionComponent,
    MultipleCollapseAccordionComponent,OutlineAccordionComponent,SimpleAccordianComponent,
    WithIconsAccordionComponent
  ],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

}
