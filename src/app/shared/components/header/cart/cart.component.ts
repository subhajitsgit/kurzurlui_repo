import { Component } from '@angular/core';
import { CommonSvgIconComponent } from '../../common-svg-icon/common-svg-icon.component';
import { FeatherIconsComponent } from '../../feather-icons/feather-icons.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone:true,
  imports:[CommonSvgIconComponent,FeatherIconsComponent,RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent {

  public isShow : boolean = false;

}
