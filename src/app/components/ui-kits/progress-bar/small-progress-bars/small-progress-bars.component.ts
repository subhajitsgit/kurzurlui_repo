import { Component } from '@angular/core';
import { smallProgressBarData } from '../../../../shared/data/data/ui-kits/progres-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-small-progress-bars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './small-progress-bars.component.html',
  styleUrls: ['./small-progress-bars.component.scss']
})

export class SmallProgressBarsComponent {

  public smallProgressBarData = smallProgressBarData;


}
