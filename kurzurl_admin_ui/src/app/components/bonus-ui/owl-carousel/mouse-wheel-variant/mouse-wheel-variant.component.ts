import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-mouse-wheel-variant',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './mouse-wheel-variant.component.html',
  styleUrls: ['./mouse-wheel-variant.component.scss']
})

export class MouseWheelVariantComponent {


  public autoPlayOptions = Data.autoPlayOptions;
  public autoPlayData = Data.autoPlayData;

}
