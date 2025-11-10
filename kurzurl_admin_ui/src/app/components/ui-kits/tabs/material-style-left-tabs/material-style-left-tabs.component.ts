import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-material-style-left-tabs',
  standalone: true,
  imports: [NgbNavModule],
  templateUrl: './material-style-left-tabs.component.html',
  styleUrls: ['./material-style-left-tabs.component.scss']
})

export class MaterialStyleLeftTabsComponent {

  public active = 1;


}
