import { Component } from '@angular/core';
import { FormDataComponent } from './form-data/form-data.component';
import { BillingDataComponent } from './billing-data/billing-data.component';

@Component({
  selector: 'app-checkout',
  standalone:true,
  imports: [FormDataComponent,BillingDataComponent],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

}
