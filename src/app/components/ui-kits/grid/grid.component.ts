import { Component } from '@angular/core';
import { GridForColumnComponent } from './grid-for-column/grid-for-column.component';
import { GridOptionsComponent } from './grid-options/grid-options.component';
import { HorizontalAlignmentComponent } from './horizontal-alignment/horizontal-alignment.component';
import { NestingComponent } from './nesting/nesting.component';
import { OffsetComponent } from './offset/offset.component';
import { OrderComponent } from './order/order.component';
import { VerticalAlignmentComponent } from './vertical-alignment/vertical-alignment.component';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [GridForColumnComponent,
    GridOptionsComponent, HorizontalAlignmentComponent,
    NestingComponent, OffsetComponent,
    OrderComponent,
    VerticalAlignmentComponent
  ],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

}
