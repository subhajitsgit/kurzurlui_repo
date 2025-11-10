import { Component } from '@angular/core';
import { tr } from 'date-fns/locale';
import { AreaSpalineChartComponent } from './area-spaline-chart/area-spaline-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BasicAreaChartComponent } from './basic-area-chart/basic-area-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { CandlestickChartComponent } from './candlestick-chart/candlestick-chart.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { ColumnChartTwoComponent } from './column-chart-two/column-chart-two.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { MixedChartComponent } from './mixed-chart/mixed-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { RadialBarChartComponent } from './radial-bar-chart/radial-bar-chart.component';
import { SteplineChartComponent } from './stepline-chart/stepline-chart.component';

@Component({
  selector: 'app-apex-charts',
  standalone : true,
  imports:[AreaSpalineChartComponent,BarChartComponent,BasicAreaChartComponent,
    BubbleChartComponent,CandlestickChartComponent,ColumnChartComponent,
    ColumnChartTwoComponent,DonutChartComponent,MixedChartComponent,
    PieChartComponent,RadarChartComponent,RadialBarChartComponent,SteplineChartComponent
  ],
  templateUrl: './apex-charts.component.html',
  styleUrls: ['./apex-charts.component.scss']
})
export class ApexChartsComponent {

}
