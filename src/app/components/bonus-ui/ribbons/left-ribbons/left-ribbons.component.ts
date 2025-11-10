import { Component } from '@angular/core';
import { leftRibbonsData } from '../../../../shared/data/data/bonus-ui/ribbons';

@Component({
  selector: 'app-left-ribbons',
  standalone:true,
  imports:[],
  templateUrl: './left-ribbons.component.html',
  styleUrls: ['./left-ribbons.component.scss']
})

export class LeftRibbonsComponent {

  public leftRibbonsData =leftRibbonsData;

}
