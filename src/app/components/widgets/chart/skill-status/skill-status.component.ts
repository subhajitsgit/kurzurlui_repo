import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/widgets/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-skill-status',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './skill-status.component.html',
  styleUrls: ['./skill-status.component.scss']
})

export class SkillStatusComponent {

  public circleChart = data.circleChart;

}
