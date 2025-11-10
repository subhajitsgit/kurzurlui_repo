import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-auto-play-variant',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './auto-play-variant.component.html',
  styleUrls: ['./auto-play-variant.component.scss']
})

export class AutoPlayVariantComponent {

  public autoPlayOptions = Data.autoPlayOptions;
  public autoPlayData = Data.autoPlayData;

}
