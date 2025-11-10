import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pills-tabs',
  standalone: true,
  imports: [NgbNavModule],
  templateUrl: './pills-tabs.component.html',
  styleUrls: ['./pills-tabs.component.scss']
})

export class PillsTabsComponent {

  public  active = 3;
  

}
