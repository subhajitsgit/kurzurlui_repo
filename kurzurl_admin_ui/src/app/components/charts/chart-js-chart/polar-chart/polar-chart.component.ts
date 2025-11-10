import { Component } from '@angular/core';
import * as data from "../../../../shared/data/chart/charts/chartjs";
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-polar-chart',
  standalone: true,
  imports : [BaseChartDirective],
  templateUrl: './polar-chart.component.html',
  styleUrls: ['./polar-chart.component.scss']
})

export class PolarChartComponent {
    // polarChart
    public polarChartLabels = data.polarChartLabels;
    public polarChartData = data.polarChartData;
    public polarChartType = data.polarChartType;
    public polarChartColors = data.polarChartColors;
    public polarChartOptions = data.polarChartOptions;
    public polarChartLegend = data.polarChartLegend;

}
