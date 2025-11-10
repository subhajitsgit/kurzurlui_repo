import { Component } from '@angular/core';
import { BasicCardChildComponent } from './basic-card-child/basic-card-child.component';
import { DarkColorCardComponent } from './dark-color-card/dark-color-card.component';
import { FlatCardComponent } from './flat-card/flat-card.component';
import { IconInHeadingComponent } from './icon-in-heading/icon-in-heading.component';
import { InfoColorCardsComponent } from './info-color-cards/info-color-cards.component';
import { WithoutShadowCardComponent } from './without-shadow-card/without-shadow-card.component';

@Component({
  selector: 'app-basic-card',
  standalone:true,
  imports:[BasicCardChildComponent,DarkColorCardComponent,FlatCardComponent,IconInHeadingComponent,InfoColorCardsComponent,WithoutShadowCardComponent],
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss']
})
export class BasicCardComponent {

}
