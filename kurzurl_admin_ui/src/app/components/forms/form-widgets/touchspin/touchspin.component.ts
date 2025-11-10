import { Component } from '@angular/core';
import { CommonTouchspinComponent } from './common-touchspin/common-touchspin.component';
import { ButtonsWithPrefixComponent } from './buttons-with-prefix/buttons-with-prefix.component';
import { IconsWithPrefixComponent } from './icons-with-prefix/icons-with-prefix.component';
import { RoundedTouchspinComponent } from './rounded-touchspin/rounded-touchspin.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';

@Component({
  selector: 'app-touchspin',
  standalone: true,
  imports: [CommonTouchspinComponent,ButtonsWithPrefixComponent,IconsWithPrefixComponent,RoundedTouchspinComponent,TypeaheadComponent],
  templateUrl: './touchspin.component.html',
  styleUrls: ['./touchspin.component.scss']
})
export class TouchspinComponent {

}
