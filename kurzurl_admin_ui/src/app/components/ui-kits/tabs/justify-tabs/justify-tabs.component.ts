import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/tab';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-justify-tabs',
  standalone: true,
  imports: [NgbNavModule],
  templateUrl: './justify-tabs.component.html',
  styleUrls: ['./justify-tabs.component.scss']
})

export class JustifyTabsComponent {

  public active = 2;
  public justifyTabData = Data.justifyTabData;

}
