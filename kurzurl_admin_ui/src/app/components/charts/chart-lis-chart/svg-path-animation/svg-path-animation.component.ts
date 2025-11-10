import { Component } from '@angular/core';
import { chart2 } from '../../../../shared/data/chart/charts/chartlist';
import { ChartistModule } from 'ng-chartist';

@Component({
  selector: 'app-svg-path-animation',
  standalone: true,
  imports : [ChartistModule],
  templateUrl: './svg-path-animation.component.html',
  styleUrls: ['./svg-path-animation.component.scss']
})

export class SVGPathAnimationComponent {

  public chart2 = chart2;

}
