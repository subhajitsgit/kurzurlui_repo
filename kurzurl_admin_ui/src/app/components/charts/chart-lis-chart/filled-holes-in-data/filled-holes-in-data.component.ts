import { Component } from '@angular/core';
import { chart12 } from '../../../../shared/data/chart/charts/chartlist';
import { ChartistModule } from 'ng-chartist';

@Component({
  selector: 'app-filled-holes-in-data',
  standalone: true,
  imports : [ChartistModule],
  templateUrl: './filled-holes-in-data.component.html',
  styleUrls: ['./filled-holes-in-data.component.scss']
})

export class FilledHolesInDataComponent {

   public chart12 = chart12;

}
