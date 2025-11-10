import { Component } from '@angular/core';
import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-square-rating',
  standalone:true,
  imports: [BarRatingModule],
  templateUrl: './square-rating.component.html',
  styleUrls: ['./square-rating.component.scss']
})

export class SquareRatingComponent {

 public  squareRate = 1;

}
