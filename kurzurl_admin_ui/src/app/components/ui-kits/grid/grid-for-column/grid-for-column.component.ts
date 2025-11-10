import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/grid';

@Component({
  selector: 'app-grid-for-column',
  standalone: true,
  imports: [],
  templateUrl: './grid-for-column.component.html',
  styleUrls: ['./grid-for-column.component.scss']
})

export class GridForColumnComponent {

  public gridColumnData = Data.gridColumnData;

}
