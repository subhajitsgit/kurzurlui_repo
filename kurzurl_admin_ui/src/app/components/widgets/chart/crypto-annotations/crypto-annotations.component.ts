import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/widgets/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-crypto-annotations',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './crypto-annotations.component.html',
  styleUrls: ['./crypto-annotations.component.scss']
})

export class CryptoAnnotationsComponent {

  public cryptoAnotation = data.cryptoAnotation

}
