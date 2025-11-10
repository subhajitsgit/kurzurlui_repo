import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/widgets/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-turn-over',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './turn-over.component.html',
  styleUrls: ['./turn-over.component.scss']
})

export class TurnOverComponent {

  public turnOver = data.turnOver;

}
