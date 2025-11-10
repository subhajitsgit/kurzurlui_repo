import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/table/bootstrap-table';

@Component({
  selector: 'app-dashed-border',
  standalone: true,
  imports:[],
  templateUrl: './dashed-border.component.html',
  styleUrls: ['./dashed-border.component.scss']
})

export class DashedBorderComponent {

  public dashboardBorder = data.dashboardBorder;

}
