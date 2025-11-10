import { Component } from '@angular/core';
import { BasicTableWithBorderBottomColorComponent } from './basic-table-with-border-bottom-color/basic-table-with-border-bottom-color.component';
import { BreckpointSpecificComponent } from './breckpoint-specific/breckpoint-specific.component';
import { CaptionComponent } from './caption/caption.component';
import { CustomTableColorStrippedComponent } from './custom-table-color-stripped/custom-table-color-stripped.component';
import { DashedBorderComponent } from './dashed-border/dashed-border.component';
import { HoverableRowsBorderComponent } from './hoverable-rows-border/hoverable-rows-border.component';
import { InverseTableComponent } from './inverse-table/inverse-table.component';
import { InverseTablePrimaryBackComponent } from './inverse-table-primary-back/inverse-table-primary-back.component';
import { ResponsiveTablesBackgroundComponent } from './responsive-tables-background/responsive-tables-background.component';
import { SizingTablesComponent } from './sizing-tables/sizing-tables.component';
import { StripedRowTableComponent } from './striped-row-table/striped-row-table.component';
import { TableHeadOptionsComponent } from './table-head-options/table-head-options.component';

@Component({
  selector: 'app-basic-table',
  standalone: true,
  imports: [BasicTableWithBorderBottomColorComponent,BreckpointSpecificComponent,CaptionComponent,CustomTableColorStrippedComponent,
    DashedBorderComponent,HoverableRowsBorderComponent,InverseTablePrimaryBackComponent,InverseTableComponent,ResponsiveTablesBackgroundComponent,
    SizingTablesComponent,StripedRowTableComponent,TableHeadOptionsComponent

  ],
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent {

}
