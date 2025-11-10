import { Component } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basic-popover',
  standalone: true,
  imports: [NgbPopoverModule],
  templateUrl: './basic-popover.component.html',
  styleUrls: ['./basic-popover.component.scss']
})
export class BasicPopoverComponent {

}
