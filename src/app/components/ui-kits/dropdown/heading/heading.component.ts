import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports:[NgbDropdownModule],
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})

export class HeadingComponent {

}
