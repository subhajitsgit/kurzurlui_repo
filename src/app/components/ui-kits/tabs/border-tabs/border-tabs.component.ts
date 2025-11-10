import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-border-tabs',
  standalone: true,
  imports: [NgbNavModule],
  templateUrl: './border-tabs.component.html',
  styleUrls: ['./border-tabs.component.scss']
})

export class BorderTabsComponent {

  public active = 2;

}
