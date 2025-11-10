import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dark',
  standalone: true,
  imports:[NgbDropdownModule],
  templateUrl: './dark.component.html',
  styleUrls: ['./dark.component.scss']
})

export class DarkComponent {

}
