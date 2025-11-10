import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/table/bootstrap-table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sizing-tables',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './sizing-tables.component.html',
  styleUrls: ['./sizing-tables.component.scss']
})

export class SizingTablesComponent {

  public sizingTable = data.sizingTable;
  
}
