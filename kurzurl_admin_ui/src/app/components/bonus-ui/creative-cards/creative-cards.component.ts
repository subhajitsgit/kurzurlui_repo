import { Component } from '@angular/core';
import { AbsoluteCardComponent } from './absolute-card/absolute-card.component';
import { BorderBottomComponent } from './border-bottom/border-bottom.component';
import { BorderLeftComponent } from './border-left/border-left.component';
import { BorderLightComponent } from './border-light/border-light.component';
import { BorderPrimaryStateComponent } from './border-primary-state/border-primary-state.component';
import { BorderSecondaryStateComponent } from './border-secondary-state/border-secondary-state.component';
import { BorderTopComponent } from './border-top/border-top.component';
import { BorderWarningStateComponent } from './border-warning-state/border-warning-state.component';

@Component({
  selector: 'app-creative-cards',
  standalone: true,
  imports: [AbsoluteCardComponent,BorderBottomComponent,BorderLeftComponent,BorderLightComponent,
    BorderPrimaryStateComponent,BorderSecondaryStateComponent,BorderTopComponent,BorderWarningStateComponent],
  templateUrl: './creative-cards.component.html',
  styleUrls: ['./creative-cards.component.scss']
})
export class CreativeCardsComponent {

}
