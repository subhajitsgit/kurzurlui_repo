import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/grid';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

export class OrderComponent {
  public orderGridData = Data.orderGridData;


}
