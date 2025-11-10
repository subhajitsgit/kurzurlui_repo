import { Component } from '@angular/core';
import * as data from '../../../shared/data/data/invoice/invoice';
import { InvoiceFourTopComponent } from './invoice-four-top/invoice-four-top.component';
import { NgxPrintModule } from 'ngx-print';

@Component({
  selector: 'app-invoice-four',
  standalone: true,
  imports: [InvoiceFourTopComponent,NgxPrintModule],
  templateUrl: './invoice-four.component.html',
  styleUrls: ['./invoice-four.component.scss']
})


export class InvoiceFourComponent {

  public invoice4 = data.invoice4;

}
