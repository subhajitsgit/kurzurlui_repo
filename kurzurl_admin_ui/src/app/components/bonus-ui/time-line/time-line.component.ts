import { Component } from '@angular/core';
import { BasicTimelineComponent } from './basic-timeline/basic-timeline.component';
import { HorizontalTimelineComponent } from './horizontal-timeline/horizontal-timeline.component';
import { HoveringTimelineComponent } from './hovering-timeline/hovering-timeline.component';
import { MofiTimelineComponent } from './mofi-timeline/mofi-timeline.component';
import { VariationTimelineComponent } from './variation-timeline/variation-timeline.component';

@Component({
  selector: 'app-time-line',
  standalone:true,
  imports:[BasicTimelineComponent,HorizontalTimelineComponent,HoveringTimelineComponent,MofiTimelineComponent,VariationTimelineComponent],
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent {

}
