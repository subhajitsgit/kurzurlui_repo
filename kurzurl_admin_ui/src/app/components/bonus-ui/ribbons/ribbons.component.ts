import { Component } from '@angular/core';
import { LeftRibbonsComponent } from './left-ribbons/left-ribbons.component';
import { RightRibbonsComponent } from './right-ribbons/right-ribbons.component';

@Component({
  selector: 'app-ribbons',
  standalone:true,
  imports:[LeftRibbonsComponent,RightRibbonsComponent],
  templateUrl: './ribbons.component.html',
  styleUrls: ['./ribbons.component.scss']
})

export class RibbonsComponent {

}
