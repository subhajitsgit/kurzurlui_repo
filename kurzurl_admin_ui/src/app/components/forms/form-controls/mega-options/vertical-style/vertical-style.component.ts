import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/data/forms/forms-controls';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vertical-style',
  standalone: true,
  imports: [NgbRatingModule,CommonModule],
  templateUrl: './vertical-style.component.html',
  styleUrls: ['./vertical-style.component.scss']
})

export class VerticalStyleComponent {

   public verticalStyle = data.verticalStyle;
   public buyingOptionVertical = data.buyingOptionVertical;

}
