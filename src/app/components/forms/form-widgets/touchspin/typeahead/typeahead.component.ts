import { Component } from '@angular/core';
import { FormattedResultComponent } from './formatted-result/formatted-result.component';
import { GlobalComponent } from './global/global.component';
import { OpenOnFocusComponent } from './open-on-focus/open-on-focus.component';
import { PreventManualEntryComponent } from './prevent-manual-entry/prevent-manual-entry.component';
import { SelectOnExactComponent } from './select-on-exact/select-on-exact.component';
import { SimpleTypeaheadComponent } from './simple-typeahead/simple-typeahead.component';
import { TemplateForResultsComponent } from './template-for-results/template-for-results.component';
import { WikipediaSearchComponent } from './wikipedia-search/wikipedia-search.component';

@Component({
  selector: 'app-typeahead',
  standalone: true,
  imports: [FormattedResultComponent,GlobalComponent,OpenOnFocusComponent,
    PreventManualEntryComponent,SelectOnExactComponent,
    SimpleTypeaheadComponent,TemplateForResultsComponent,
    WikipediaSearchComponent],
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class TypeaheadComponent {

}
