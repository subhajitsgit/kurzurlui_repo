import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-with-controls',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './with-controls.component.html',
  styleUrls: ['./with-controls.component.scss']
})

export class WithControlsComponent {

  public withControlOptions = Data.withControlOptions;
  public withControlData = Data.withControlData;  

}
