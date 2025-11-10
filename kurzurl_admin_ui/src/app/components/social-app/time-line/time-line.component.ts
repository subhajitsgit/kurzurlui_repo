import { Component } from '@angular/core';
import { TimeLineLeftComponent } from './time-line-left/time-line-left.component';
import { TimeLineCenterComponent } from './time-line-center/time-line-center.component';
import { TimeLineRightComponent } from './time-line-right/time-line-right.component';

@Component({
  selector: 'app-time-line',
  standalone:true,
  imports: [TimeLineLeftComponent,TimeLineCenterComponent,TimeLineRightComponent],
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent {

}
