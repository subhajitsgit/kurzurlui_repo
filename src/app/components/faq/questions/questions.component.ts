import { Component } from '@angular/core';
import { NgbAccordionConfig, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { questionData } from '../../../shared/data/data/faq/faq';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [NgbAccordionModule,FeatherIconsComponent],
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent {

  public questionData = questionData;

  constructor(config: NgbAccordionConfig) {
    config.closeOthers = true;
  }

}
