import { Component } from '@angular/core';
import * as data from '../../../shared/data/data/user/user'
import { CommonSvgIconComponent } from '../../../shared/components/common-svg-icon/common-svg-icon.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-cards',
  standalone: true,
  imports:[CommonSvgIconComponent,RouterModule],
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.scss']
})

export class UserCardsComponent {

   public userCards = data.userCards;

}
