import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/table/bootstrap-table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-breckpoint-specific',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './breckpoint-specific.component.html',
  styleUrls: ['./breckpoint-specific.component.scss']
})

export class BreckpointSpecificComponent {

  public breckpointSpecific = data.breckpointSpecific;

}
