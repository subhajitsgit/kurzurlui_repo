import { Component } from '@angular/core';
import { checkBox } from '../../../../shared/data/data/ui-kits/list';

@Component({
  selector: 'app-checkbox-list',
  standalone:true,
  imports:[],
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.scss']
})

export class CheckboxListComponent {

  public checkBox = checkBox;

}
