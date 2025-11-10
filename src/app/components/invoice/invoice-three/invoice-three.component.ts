import { Component } from '@angular/core';
import * as data  from '../../../shared/data/data/invoice/invoice';
import { InvoiceThreeTopComponent } from './invoice-three-top/invoice-three-top.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { NgxPrintModule } from 'ngx-print';

@Component({
  selector: 'app-invoice-three',
  standalone: true,
  imports: [InvoiceThreeTopComponent,TopHeaderComponent,NgxPrintModule],
  templateUrl: './invoice-three.component.html',
  styleUrls: ['./invoice-three.component.scss']
})

export class InvoiceThreeComponent {
  
   public invoice3 = data.invoice3;

}
