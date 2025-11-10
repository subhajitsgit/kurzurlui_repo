import { Component } from '@angular/core';
import * as data from '../../../shared/data/data/ecommerce/ecommerce'
import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports:[BarRatingModule],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})

export class WishlistComponent {
  public wishList = data.wishlist
}
