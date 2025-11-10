import { Component } from '@angular/core';
import * as data from '../../../../../../shared/data/data/forms/form-widgets';
import { OperatorFunction, Observable, debounceTime, map } from 'rxjs';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-template-for-results',
  standalone: true,
  imports:[NgbTypeaheadModule],
  templateUrl: './template-for-results.component.html',
  styleUrls: ['./template-for-results.component.scss']
})

export class TemplateForResultsComponent {

  public flagData = data.statesWithFlags;
  
  search: OperatorFunction<string, readonly { name: string; flag:string }[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			map((term) =>
				term === ''
					? []
					: this.flagData.filter((v) => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
			),
		);

	formatter = (x: { name: string }) => x.name;

}
