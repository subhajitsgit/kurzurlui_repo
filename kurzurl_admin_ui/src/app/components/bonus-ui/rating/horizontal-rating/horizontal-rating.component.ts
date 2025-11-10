import { Component } from '@angular/core';
import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-horizontal-rating',
  standalone:true,
  imports: [BarRatingModule],
  templateUrl: './horizontal-rating.component.html',
  styleUrls: ['./horizontal-rating.component.scss']
})

export class HorizontalRatingComponent {

  public verticalRate = 1;

}
