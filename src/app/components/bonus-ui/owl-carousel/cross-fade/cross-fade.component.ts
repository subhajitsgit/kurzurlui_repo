import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-cross-fade',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './cross-fade.component.html',
  styleUrls: ['./cross-fade.component.scss']
})

export class CrossFadeComponent {

  public crossFadeOptions = Data.crossFadeOptions;
  public crossFadeData = Data.crossFadeData;

}
