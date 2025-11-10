import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/table/bootstrap-table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-responsive-tables-background',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './responsive-tables-background.component.html',
  styleUrls: ['./responsive-tables-background.component.scss']
})

export class ResponsiveTablesBackgroundComponent {

  public responsiveTablesBackground = data.responsiveTablesBackground;

}
