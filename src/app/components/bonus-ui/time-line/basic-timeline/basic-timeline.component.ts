import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/bonus-ui/timeline';

@Component({
  selector: 'app-basic-timeline',
  standalone: true,
  imports: [],
  templateUrl: './basic-timeline.component.html',
  styleUrls: ['./basic-timeline.component.scss']
})

export class BasicTimelineComponent {

  public basicTimelineData = Data.basicTimelineData;

}
