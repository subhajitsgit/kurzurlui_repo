import { Component } from '@angular/core';
import { BasicTooltipComponent } from './basic-tooltip/basic-tooltip.component';
import { ColoredTooltipComponent } from './colored-tooltip/colored-tooltip.component';
import { FilledTooltipComponent } from './filled-tooltip/filled-tooltip.component';
import { HoverEffectComponent } from './hover-effect/hover-effect.component';
import { TooltipDirectionsComponent } from './tooltip-directions/tooltip-directions.component';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [BasicTooltipComponent,ColoredTooltipComponent,
    FilledTooltipComponent,HoverEffectComponent,TooltipDirectionsComponent],
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {

}
