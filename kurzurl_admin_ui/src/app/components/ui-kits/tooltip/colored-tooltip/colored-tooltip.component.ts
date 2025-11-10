import { Component } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-colored-tooltip',
  standalone: true,
  imports: [NgbTooltipModule],
  templateUrl: './colored-tooltip.component.html',
  styleUrls: ['./colored-tooltip.component.scss']
})
export class ColoredTooltipComponent {

}
