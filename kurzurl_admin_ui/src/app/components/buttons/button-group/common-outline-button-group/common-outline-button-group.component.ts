import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/buttons/buttons';

@Component({
  selector: 'app-common-outline-button-group',
  standalone:true,
  imports:[],
  templateUrl: './common-outline-button-group.component.html',
  styleUrls: ['./common-outline-button-group.component.scss']
})

export class CommonOutlineButtonGroupComponent {

  public commonOutlinedButtonGroupData = Data.commonOutlinedButtonGroupData;


}
