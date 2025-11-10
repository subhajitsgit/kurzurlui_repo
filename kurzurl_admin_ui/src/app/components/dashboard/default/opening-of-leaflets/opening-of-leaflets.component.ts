import { Component } from '@angular/core';
import * as data from '../../../../shared/data/chart/general/apex-chart';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ClickOutsideDirective } from '../../../../shared/directive/click-outside.directive';

@Component({
  selector: 'app-opening-of-leaflets',
  standalone:true,
  imports: [NgApexchartsModule,ClickOutsideDirective],
  templateUrl: './opening-of-leaflets.component.html',
  styleUrls: ['./opening-of-leaflets.component.scss']
})

export class OpeningOfLeafletsComponent {

  public isShow:boolean = false;
  public openingOfLeaflet = data.openingOfLeaflet;

  clickOutside(): void {
    this.isShow = false;
  }
  
}
