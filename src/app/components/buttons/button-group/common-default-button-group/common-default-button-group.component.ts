import { Component } from '@angular/core';
import * as Data from "../../../../shared/data/data/buttons/buttons";

@Component({
  selector: 'app-common-default-button-group',
  standalone:true,
  imports:[],
  templateUrl: './common-default-button-group.component.html',
  styleUrls: ['./common-default-button-group.component.scss']
})

export class CommonDefaultButtonGroupComponent {

  public commonDefaultButtonGroupData = Data.commonDefaultButtonGroupData;


}
