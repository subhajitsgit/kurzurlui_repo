import { Component } from '@angular/core';
import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-star-rating',
  standalone:true,
  imports: [BarRatingModule],
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})

export class StarRatingComponent {

  public cssRate = 2.6;

}
