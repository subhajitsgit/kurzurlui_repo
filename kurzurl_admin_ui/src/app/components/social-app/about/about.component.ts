import { Component } from '@angular/core';
import { TimeLineLeftComponent } from '../time-line/time-line-left/time-line-left.component';
import { AboutCenterComponent } from './about-center/about-center.component';
import { TimeLineRightComponent } from '../time-line/time-line-right/time-line-right.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports:[TimeLineLeftComponent,AboutCenterComponent,TimeLineRightComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

}
