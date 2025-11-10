import { Component } from '@angular/core';
import * as data  from '../../../shared/data/data/invoice/invoice';
import { InvoiceTwoBottomComponent } from './invoice-two-bottom/invoice-two-bottom.component';
import { InvoiceTwoTopComponent } from './invoice-two-top/invoice-two-top.component';
import { NgxPrintModule } from 'ngx-print';

@Component({
  selector: 'app-invoice-two',
  standalone: true,
  imports: [InvoiceTwoBottomComponent,InvoiceTwoTopComponent,NgxPrintModule],
  templateUrl: './invoice-two.component.html',
  styleUrls: ['./invoice-two.component.scss']
})

export class InvoiceTwoComponent {
  
   public invoice2 = data.invoice2;
}
