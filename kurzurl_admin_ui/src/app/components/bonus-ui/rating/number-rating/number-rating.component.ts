import { Component } from '@angular/core';
import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-number-rating',
  standalone:true,
  imports: [BarRatingModule],
  templateUrl: './number-rating.component.html',
  styleUrls: ['./number-rating.component.scss']
})

export class NumberRatingComponent {

  public faRate = 7;


}
