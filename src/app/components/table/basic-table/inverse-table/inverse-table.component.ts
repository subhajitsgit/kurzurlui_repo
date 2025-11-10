import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/table/bootstrap-table';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-inverse-table',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './inverse-table.component.html',
  styleUrls: ['./inverse-table.component.scss']
})

export class InverseTableComponent {

  public tableInvoice = data.tableInvoice;

}
