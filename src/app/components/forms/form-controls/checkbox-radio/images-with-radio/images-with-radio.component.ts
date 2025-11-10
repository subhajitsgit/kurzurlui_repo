import { Component } from '@angular/core';
import { imagesWithRadio } from '../../../../../shared/data/data/forms/chechbox-radio';

@Component({
  selector: 'app-images-with-radio',
  standalone: true,
  imports: [],
  templateUrl: './images-with-radio.component.html',
  styleUrls: ['./images-with-radio.component.scss']
})

export class ImagesWithRadioComponent {

  public imagesWithRadio = imagesWithRadio;
  
}