import { Component } from '@angular/core';
import * as data  from '../../../shared/data/data/invoice/invoice';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { InvoiceFiveTopComponent } from './invoice-five-top/invoice-five-top.component';
import { NgxPrintModule } from 'ngx-print';

@Component({
  selector: 'app-invoice-five',
  standalone: true,
  imports: [InvoiceDetailsComponent,InvoiceFiveTopComponent,NgxPrintModule],
  templateUrl: './invoice-five.component.html',
  styleUrls: ['./invoice-five.component.scss']
})

export class InvoiceFiveComponent {

  public invoice4 = data.invoice4;


}
