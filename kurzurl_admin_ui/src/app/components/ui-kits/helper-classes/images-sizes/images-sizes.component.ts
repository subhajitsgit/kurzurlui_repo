import { Component } from '@angular/core';
import * as data from '../../../../shared/data/data/ui-kits/helper-class';

@Component({
  selector: 'app-images-sizes',
  standalone: true,
  imports: [],
  templateUrl: './images-sizes.component.html',
  styleUrls: ['./images-sizes.component.scss']
})

export class ImagesSizesComponent {

  public imageSizeData = data.imageSizeData;

}
