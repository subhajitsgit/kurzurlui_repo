import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/progres-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multiple-bars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './multiple-bars.component.html',
  styleUrls: ['./multiple-bars.component.scss']
})

export class MultipleBarsComponent {

  public multipalBarData = Data.multipalBarData;

}
