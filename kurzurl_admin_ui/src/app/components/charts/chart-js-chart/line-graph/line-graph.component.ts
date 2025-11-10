import { Component } from '@angular/core';
import * as chartData  from '../../../../shared/data/chart/charts/chartjs';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-line-graph',
  standalone: true,
  imports : [BaseChartDirective],
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss']
})

export class LineGraphComponent {

  public lineGraphOptions = chartData.lineGraphOptions;
  public lineGraphLabels = chartData.lineGraphLabels;
  public lineGraphType = chartData.lineGraphType;
  public lineGraphLegend = chartData.lineGraphLegend;
  public lineGraphData = chartData.lineGraphData;

}
