import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/data/forms/forms-controls';

@Component({
  selector: 'app-variation-radio',
  standalone: true,
  imports: [],
  templateUrl: './variation-radio.component.html',
  styleUrls: ['./variation-radio.component.scss']
})

export class VariationRadioComponent {

  public variationRadioPayment = data.variationRadioPaymentData;
  public variationRadioDesign = data.variationRadioDesign;
  public variationRadioIcon = data.variationRadioIcon;

}
