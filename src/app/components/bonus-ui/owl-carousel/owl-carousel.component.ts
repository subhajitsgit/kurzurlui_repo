import { Component } from '@angular/core';
import { AutoPlayVariantComponent } from './auto-play-variant/auto-play-variant.component';
import { CrossFadeComponent } from './cross-fade/cross-fade.component';
import { DarkVariantComponent } from './dark-variant/dark-variant.component';
import { MouseWheelVariantComponent } from './mouse-wheel-variant/mouse-wheel-variant.component';
import { SlidesOnlyComponent } from './slides-only/slides-only.component';
import { WithCaptionsComponent } from './with-captions/with-captions.component';
import { WithControlsComponent } from './with-controls/with-controls.component';
import { WithIndicatorsComponent } from './with-indicators/with-indicators.component';

@Component({
  selector: 'app-owl-carousel',
  standalone: true,
  imports: [AutoPlayVariantComponent, CrossFadeComponent, DarkVariantComponent, 
    MouseWheelVariantComponent, SlidesOnlyComponent, WithCaptionsComponent,
     WithControlsComponent, WithIndicatorsComponent],
  templateUrl: './owl-carousel.component.html',
  styleUrls: ['./owl-carousel.component.scss']
})

export class OwlCarouselComponent {

}
