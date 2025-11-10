import { Component } from '@angular/core';
import * as data from '../../../shared/data/data/ui-kits/avatars';
import { CommonAvatarsComponent } from './common-avatars/common-avatars.component';
import { GroupingComponent } from './grouping/grouping.component';

@Component({
  selector: 'app-avatars',
  standalone:true,
  imports:[CommonAvatarsComponent,GroupingComponent],
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.scss']
})

export class AvatarsComponent {

  public sizingData = data.sizesAvtarData;
  public statusIndicatorData = data.statusIndicatorData;
  public shapeData = data.shapeData;
  public ratioData = data.ratioData;
 
}
