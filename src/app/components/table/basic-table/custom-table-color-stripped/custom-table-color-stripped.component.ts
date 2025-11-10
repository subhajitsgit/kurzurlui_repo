import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/table/bootstrap-table';

@Component({
  selector: 'app-custom-table-color-stripped',
  standalone: true,
  imports:[],
  templateUrl: './custom-table-color-stripped.component.html',
  styleUrls: ['./custom-table-color-stripped.component.scss']
})

export class CustomTableColorStrippedComponent {

  public customTableColorStripped = data.customTableColorStripped;

}
