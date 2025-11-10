import { Component } from '@angular/core';
import * as data from '../../../../../../shared/data/data/forms/form-widgets';
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-simple-typeahead',
  standalone: true,
  imports:[NgbTypeaheadModule],
  templateUrl: './simple-typeahead.component.html',
  styleUrls: ['./simple-typeahead.component.scss']
})

export class SimpleTypeaheadComponent {

  public states = data.state;

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
  text$.pipe(
	debounceTime(200),
	distinctUntilChanged(),
	map((term) =>
		term.length < 2 ? [] : this.states.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
	),
);

}
