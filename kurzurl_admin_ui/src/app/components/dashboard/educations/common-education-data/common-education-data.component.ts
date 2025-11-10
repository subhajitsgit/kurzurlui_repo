import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/dashboard/education';

@Component({
  selector: 'app-common-education-data',
  standalone: true,
  imports:[],
  templateUrl: './common-education-data.component.html',
  styleUrls: ['./common-education-data.component.scss']
})

export class CommonEducationDataComponent {
  public commonEducationData = data.commonEducationData;

}
