import { Component } from '@angular/core';
import { CurrentRatingComponent } from './current-rating/current-rating.component';
import { HorizontalRatingComponent } from './horizontal-rating/horizontal-rating.component';
import { MovieRatingComponent } from './movie-rating/movie-rating.component';
import { NumberRatingComponent } from './number-rating/number-rating.component';
import { SquareRatingComponent } from './square-rating/square-rating.component';
import { StarRatingComponent } from './star-rating/star-rating.component';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CurrentRatingComponent,HorizontalRatingComponent,
    MovieRatingComponent,NumberRatingComponent,SquareRatingComponent,
    StarRatingComponent],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {

}
