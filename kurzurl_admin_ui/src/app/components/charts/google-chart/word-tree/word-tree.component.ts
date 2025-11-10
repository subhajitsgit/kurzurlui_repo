import { Component } from '@angular/core';
import { wordTreeChart } from '../../../../shared/data/chart/charts/google-chart';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
  selector: 'app-word-tree',
    standalone: true,
  imports: [Ng2GoogleChartsModule],
  templateUrl: './word-tree.component.html',
  styleUrls: ['./word-tree.component.scss']
})

export class WordTreeComponent {
  public wordTreeChart = wordTreeChart;
}
