import { Component, Input } from '@angular/core';
import { addProduct } from '../../../../shared/data/data/ecommerce/add-product';
import { CommonSvgIconComponent } from '../../../../shared/components/common-svg-icon/common-svg-icon.component';

@Component({
  selector: 'app-add-product-tab',
  standalone: true,
  imports: [CommonSvgIconComponent],
  templateUrl: './add-product-tab.component.html',
  styleUrls: ['./add-product-tab.component.scss']
})

export class AddProductTabComponent {

  @Input() data: addProduct[];
  @Input() activeSteps!: number;

}
