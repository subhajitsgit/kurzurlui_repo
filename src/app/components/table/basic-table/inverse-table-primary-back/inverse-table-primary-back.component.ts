import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/table/bootstrap-table';

@Component({
  selector: 'app-inverse-table-primary-back',
  standalone: true,
  imports:[],
  templateUrl: './inverse-table-primary-back.component.html',
  styleUrls: ['./inverse-table-primary-back.component.scss']
})

export class InverseTablePrimaryBackComponent {

  public inverseTablebackground = data.inverseTablebackground;

}
