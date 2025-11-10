import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/ui-kits/progres-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basic-progress-bars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-progress-bars.component.html',
  styleUrls: ['./basic-progress-bars.component.scss']
})

export class BasicProgressBarsComponent {

  public basicProgressBarData = data.basicProgressBarData;

}
