import { Component } from '@angular/core';
import { imagesWithCheckbox } from '../../../../../shared/data/data/forms/chechbox-radio';

@Component({
  selector: 'app-images-with-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './images-with-checkbox.component.html',
  styleUrls: ['./images-with-checkbox.component.scss']
})

export class ImagesWithCheckboxComponent {

  public  imagesWithCheckbox = imagesWithCheckbox;

}
