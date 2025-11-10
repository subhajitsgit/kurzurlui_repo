import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/progres-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-progress-bars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-progress-bars.component.html',
  styleUrls: ['./custom-progress-bars.component.scss']
})

export class CustomProgressBarsComponent {

  public customeProgressData = Data.customeProgressData;


}
