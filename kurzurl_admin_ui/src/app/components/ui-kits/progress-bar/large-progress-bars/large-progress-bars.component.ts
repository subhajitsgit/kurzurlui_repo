import { Component } from '@angular/core';
import { largeProgressBarData } from '../../../../shared/data/data/ui-kits/progres-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-large-progress-bars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './large-progress-bars.component.html',
  styleUrls: ['./large-progress-bars.component.scss']
})

export class LargeProgressBarsComponent {

  public largeProgressBarData = largeProgressBarData;


}
