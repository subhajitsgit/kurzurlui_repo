import { Component } from '@angular/core';
  import * as data from '../../../../shared/data/data/dashboard/ecommerce';
import { CommonSvgIconComponent } from '../../../../shared/components/common-svg-icon/common-svg-icon.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ClickOutsideDirective } from '../../../../shared/directive/click-outside.directive';
import L from 'leaflet';

@Component({
  selector: 'app-user-by-continent',
  standalone: true,
  imports: [CommonSvgIconComponent,LeafletModule,ClickOutsideDirective],
  templateUrl: './user-by-continent.component.html',
  styleUrls: ['./user-by-continent.component.scss']
})

export class UserByContinentComponent {

  public isShow : boolean = false; 
  public contriesSale  = data.contriesSale;
  public itemsProgress  = data.itemsProgress;
  public options1 = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...',
      }),
    ],
    zoom: 5,
    center: L.latLng(46.879966, -121.726909),
  };

  clickOutside(): void {
    this.isShow = false;
  }
  
}
