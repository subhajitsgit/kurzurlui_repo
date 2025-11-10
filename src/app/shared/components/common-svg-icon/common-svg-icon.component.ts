import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-svg-icon',
  standalone:true,
  imports:[],
  templateUrl: './common-svg-icon.component.html',
  styleUrls: ['./common-svg-icon.component.scss']
})

export class CommonSvgIconComponent {

  @Input("icon") public icon: any;
  @Input("class") public class: any;

}
