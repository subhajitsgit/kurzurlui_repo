import { Component } from '@angular/core';
import * as Data from '../../../shared/data/data/ui-kits/progres-bar';
import { BasicProgressBarsComponent } from './basic-progress-bars/basic-progress-bars.component';
import { CustomHeightProgressComponent } from './custom-height-progress/custom-height-progress.component';
import { CustomProgressBarsComponent } from './custom-progress-bars/custom-progress-bars.component';
import { LargeProgressBarsComponent } from './large-progress-bars/large-progress-bars.component';
import { MultipleBarsComponent } from './multiple-bars/multiple-bars.component';
import { ProgressWithNumberStepsComponent } from './progress-with-number-steps/progress-with-number-steps.component';
import { SmallProgressBarsComponent } from './small-progress-bars/small-progress-bars.component';
import { CommonProgressBarComponent } from './common-progress-bar/common-progress-bar.component';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [BasicProgressBarsComponent,CommonProgressBarComponent,CustomHeightProgressComponent,CustomProgressBarsComponent,
    LargeProgressBarsComponent,MultipleBarsComponent,ProgressWithNumberStepsComponent,SmallProgressBarsComponent
  ],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})

export class ProgressBarComponent {

  public stripedData = Data.stripedData;
  public stripedAnimatedData = Data.stripedAnimatedData;

}
