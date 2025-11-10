import { Component } from '@angular/core';
import { CodComponent } from './cod/cod.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { EmiComponent } from './emi/emi.component';
import { NetBankingComponent } from './net-banking/net-banking.component';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports : [CodComponent,CreditCardComponent,DebitCardComponent,EmiComponent,NetBankingComponent],
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent {

}
