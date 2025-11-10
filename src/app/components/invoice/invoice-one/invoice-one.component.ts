import { Component } from '@angular/core';
import * as data  from '../../../shared/data/data/invoice/invoice';
import { InvoiceTopComponent } from './invoice-top/invoice-top.component';
import { NgxPrintModule } from 'ngx-print';

@Component({
  selector: 'app-invoice-one',
  standalone: true,
  imports: [InvoiceTopComponent,NgxPrintModule],
  templateUrl: './invoice-one.component.html',
  styleUrls: ['./invoice-one.component.scss']
})

export class InvoiceOneComponent {

  public invoice1 =  data.invoice1;

}
