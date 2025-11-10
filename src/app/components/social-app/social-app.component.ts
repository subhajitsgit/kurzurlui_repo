import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserCardsComponent } from '../users/user-cards/user-cards.component';
import { AboutComponent } from './about/about.component';
import { PhotoComponent } from './photo/photo.component';
import { TimeLineComponent } from './time-line/time-line.component';

@Component({
  selector: 'app-social-app',
  standalone:true,
  imports: [CommonModule,TimeLineComponent,AboutComponent,UserCardsComponent,PhotoComponent,],
  templateUrl: './social-app.component.html',
  styleUrls: ['./social-app.component.scss']
})

export class SocialAppComponent {

  public active = 1;
  public openTab: string = "timeline";

  public tabbed(val: string) {
    this.openTab = val;
  }

}
