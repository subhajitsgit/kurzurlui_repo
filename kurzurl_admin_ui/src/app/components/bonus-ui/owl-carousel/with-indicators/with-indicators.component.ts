import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-with-indicators',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './with-indicators.component.html',
  styleUrls: ['./with-indicators.component.scss']
})

export class WithIndicatorsComponent {
  public withIndicatorOptions = Data.withIndicatorOptions;
  public withIndicatorData = Data.withIndicatorData;
}
