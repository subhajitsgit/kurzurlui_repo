import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/table/bootstrap-table';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-hoverable-rows-border',  
  standalone: true,
  imports:[FeatherIconsComponent],
  templateUrl: './hoverable-rows-border.component.html',
  styleUrls: ['./hoverable-rows-border.component.scss']
})

export class HoverableRowsBorderComponent {

  public hoverableRowsBorder = data.hoverableRowsBorder;

}
