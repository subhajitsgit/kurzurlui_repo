import { Component } from '@angular/core';
import { areaSpaline } from '../../../../shared/data/chart/charts/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-area-spaline-chart',
  standalone : true,
  imports:[NgApexchartsModule],
  templateUrl: './area-spaline-chart.component.html',
  styleUrls: ['./area-spaline-chart.component.scss']
})

export class AreaSpalineChartComponent {

  public areaSpalineChart = areaSpaline;

}
