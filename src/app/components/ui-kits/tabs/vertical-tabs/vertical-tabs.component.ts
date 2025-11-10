import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vertical-tabs',
  standalone: true,
  imports: [NgbNavModule],
  templateUrl: './vertical-tabs.component.html',
  styleUrls: ['./vertical-tabs.component.scss']
})

export class VerticalTabsComponent {

  public active = "component"

}
