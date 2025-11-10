import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/alert';

@Component({
  selector: 'app-additional-content',
  standalone: true,
  imports: [],
  templateUrl: './additional-content.component.html',
  styleUrls: ['./additional-content.component.scss']
})

export class AdditionalContentComponent {

  public additionalContentData = Data.additionalContentData;

}
