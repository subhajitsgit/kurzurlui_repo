import { Component } from '@angular/core';
import { DashedBorderStyleComponent } from './dashed-border-style/dashed-border-style.component';
import { DefaultStyleComponent } from './default-style/default-style.component';
import { HorizontalStyleComponent } from './horizontal-style/horizontal-style.component';
import { InlineStyleComponent } from './inline-style/inline-style.component';
import { OfferStyleBorderComponent } from './offer-style-border/offer-style-border.component';
import { VariationCheckboxComponent } from './variation-checkbox/variation-checkbox.component';
import { VariationRadioComponent } from './variation-radio/variation-radio.component';
import { VerticalStyleComponent } from './vertical-style/vertical-style.component';
import { WithoutBordersStyleComponent } from './without-borders-style/without-borders-style.component';

@Component({
  selector: 'app-mega-options',
  standalone: true,
  imports:[DashedBorderStyleComponent,DefaultStyleComponent,HorizontalStyleComponent,
    InlineStyleComponent,OfferStyleBorderComponent,VariationCheckboxComponent,
    VariationRadioComponent,VerticalStyleComponent,WithoutBordersStyleComponent],
  templateUrl: './mega-options.component.html',
  styleUrls: ['./mega-options.component.scss']
})
export class MegaOptionsComponent {

}
