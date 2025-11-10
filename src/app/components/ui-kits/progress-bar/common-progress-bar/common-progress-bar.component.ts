import { Component, Input } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/progres-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-common-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-progress-bar.component.html',
  styleUrls: ['./common-progress-bar.component.scss']
})

export class CommonProgressBarComponent {

  @Input() data : Data.progressBar [];

}
