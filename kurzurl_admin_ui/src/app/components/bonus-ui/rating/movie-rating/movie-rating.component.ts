import { Component } from '@angular/core';
import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-movie-rating',
  standalone:true,
  imports: [BarRatingModule],
  templateUrl: './movie-rating.component.html',
  styleUrls: ['./movie-rating.component.scss']
})

export class MovieRatingComponent {

  public movieRate = 2;

}
