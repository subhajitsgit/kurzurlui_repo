import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/tag-pills';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-badges-as-part-buttons',
  standalone: true,
  imports: [FeatherIconsComponent],
  templateUrl: './badges-as-part-buttons.component.html',
  styleUrls: ['./badges-as-part-buttons.component.scss']
})

export class BadgesAsPartButtonsComponent {

  public badgeButtonData = Data.badgeButtonData;


}
