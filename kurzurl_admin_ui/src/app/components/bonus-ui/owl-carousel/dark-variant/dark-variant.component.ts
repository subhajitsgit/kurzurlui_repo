import { Component } from '@angular/core';
import { darkVariantData  , withIndicatorOptions} from '../../../../shared/data/data/bonus-ui/owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-dark-variant',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './dark-variant.component.html',
  styleUrls: ['./dark-variant.component.scss']
})

export class DarkVariantComponent {

  public darkVariantData = darkVariantData;
  public withIndicatorOptions =withIndicatorOptions;

}
