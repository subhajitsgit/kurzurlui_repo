import { Component, Input } from '@angular/core';
import * as data from '../../../../shared/data/data/ui-kits/tag-pills';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-common-tag-pills',
  standalone: true,
  imports: [FeatherIconsComponent],
  templateUrl: './common-tag-pills.component.html',
  styleUrls: ['./common-tag-pills.component.scss']
})

export class CommonTagPillsComponent {

  @Input() data : data.commonTagPills [];

}
