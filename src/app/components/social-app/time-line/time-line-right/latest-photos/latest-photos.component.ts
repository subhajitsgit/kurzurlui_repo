import { Component } from '@angular/core';
import * as data from "../../../../../shared/data/data/social-app/social-app";
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-latest-photos',
  standalone:true,
  imports: [NgbCollapseModule],
  templateUrl: './latest-photos.component.html',
  styleUrls: ['./latest-photos.component.scss']
})

export class LatestPhotosComponent {

  public isCollapsed = false;
  public latestPhotos = data.latestPhotos;

}
