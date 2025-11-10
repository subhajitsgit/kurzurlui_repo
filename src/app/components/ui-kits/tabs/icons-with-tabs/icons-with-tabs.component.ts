import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-icons-with-tabs',
  standalone: true,
  imports: [NgbNavModule],
  templateUrl: './icons-with-tabs.component.html',
  styleUrls: ['./icons-with-tabs.component.scss']
})

export class IconsWithTabsComponent {

 public active = 1;


}
