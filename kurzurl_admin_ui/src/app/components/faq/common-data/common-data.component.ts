import { Component, Input } from '@angular/core';
import { commonData } from '../../../shared/data/data/faq/faq';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-common-data',
  standalone: true,
  imports: [FeatherIconsComponent],
  templateUrl: './common-data.component.html',
  styleUrls: ['./common-data.component.scss']
})

export class commonDataComponent {

  @Input() data: commonData[];

}
