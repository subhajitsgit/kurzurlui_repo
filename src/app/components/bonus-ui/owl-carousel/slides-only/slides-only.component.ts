import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slides-only',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './slides-only.component.html',
  styleUrls: ['./slides-only.component.scss']
})

export class SlidesOnlyComponent {

  public slidesOnlyOptions = Data.slidesOnlyOptions;
  public slidesOnlyData = Data.slidesOnlyData;

}
