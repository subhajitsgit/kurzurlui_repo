import { Component } from '@angular/core';
import { AdvancedSMILAnimationsComponent } from './advanced-smil-animations/advanced-smil-animations.component';
import { AnimatingADonutWithSvgComponent } from './animating-a-donut-with-svg/animating-a-donut-with-svg.component';
import { BiPolarBarChartComponent } from './bi-polar-bar-chart/bi-polar-bar-chart.component';
import { BiPolarLineChartComponent } from './bi-polar-line-chart/bi-polar-line-chart.component';
import { FilledHolesInDataComponent } from './filled-holes-in-data/filled-holes-in-data.component';
import { HolesInDataComponent } from './holes-in-data/holes-in-data.component';
import { HorizontalBarChartComponent } from './horizontal-bar-chart/horizontal-bar-chart.component';
import { LineChartWithAreaComponent } from './line-chart-with-area/line-chart-with-area.component';
import { SimpleLineChartComponent } from './simple-line-chart/simple-line-chart.component';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';
import { SVGPathAnimationComponent } from './svg-path-animation/svg-path-animation.component';
import { XremeResponsiveConfigurationComponent } from './xreme-responsive-configuration/xreme-responsive-configuration.component';

@Component({
  selector: 'app-chart-lis-chart',
  standalone : true,
  imports : [AdvancedSMILAnimationsComponent,AnimatingADonutWithSvgComponent,
    BiPolarBarChartComponent,BiPolarLineChartComponent,FilledHolesInDataComponent,
    HolesInDataComponent,HorizontalBarChartComponent,LineChartWithAreaComponent,
    SimpleLineChartComponent,StackedBarChartComponent,SVGPathAnimationComponent,
    XremeResponsiveConfigurationComponent
  ],
  templateUrl: './chart-lis-chart.component.html',
  styleUrls: ['./chart-lis-chart.component.scss']
})
export class ChartLisChartComponent {

}
