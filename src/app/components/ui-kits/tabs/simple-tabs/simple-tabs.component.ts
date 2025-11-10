import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-simple-tabs',
  standalone: true,
  imports: [NgbNavModule],
  templateUrl: './simple-tabs.component.html',
  styleUrls: ['./simple-tabs.component.scss']
})

export class SimpleTabsComponent {

  public active = 2;

}
