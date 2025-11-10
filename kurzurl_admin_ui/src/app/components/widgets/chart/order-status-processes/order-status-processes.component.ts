import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/widgets/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-order-status-processes',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './order-status-processes.component.html',
  styleUrls: ['./order-status-processes.component.scss']
})

export class OrderStatusProcessesComponent {

  public orderStatusProcesses = data.orderStatusProcesses

}
