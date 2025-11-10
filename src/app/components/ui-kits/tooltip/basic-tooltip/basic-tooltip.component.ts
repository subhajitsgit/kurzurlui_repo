import { Component } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basic-tooltip',
  standalone: true,
  imports: [NgbTooltipModule],
  templateUrl: './basic-tooltip.component.html',
  styleUrls: ['./basic-tooltip.component.scss']
})
export class BasicTooltipComponent {

}
