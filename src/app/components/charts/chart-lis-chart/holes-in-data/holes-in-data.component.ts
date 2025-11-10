import { Component } from '@angular/core';
import { chart11 } from '../../../../shared/data/chart/charts/chartlist';
import { ChartistModule } from 'ng-chartist';

@Component({
  selector: 'app-holes-in-data',
  standalone: true,
  imports : [ChartistModule],
  templateUrl: './holes-in-data.component.html',
  styleUrls: ['./holes-in-data.component.scss']
})

export class HolesInDataComponent {

  public chart11 = chart11;

}
