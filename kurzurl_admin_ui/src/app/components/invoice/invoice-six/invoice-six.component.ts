import { Component } from '@angular/core';
import { InvoiceTableComponent } from './invoice-table/invoice-table.component';
import { NgxPrintModule } from 'ngx-print';

@Component({
  selector: 'app-invoice-six',
  standalone: true,
  imports: [InvoiceTableComponent,NgxPrintModule],
  templateUrl: './invoice-six.component.html',
  styleUrls: ['./invoice-six.component.scss']
})

export class InvoiceSixComponent {


}
