import { Component } from '@angular/core';
import { ticketListStatus } from '../../shared/data/data/support-tickit/support-tickit';
import { SupportTicketListComponent } from './support-ticket-list/support-ticket-list.component';
import { DataTableComponent } from './data-table/data-table.component';

@Component({
  selector: 'app-support-ticket',
  standalone: true,
  imports:[SupportTicketListComponent,DataTableComponent],
  templateUrl: './support-ticket.component.html',
  styleUrls: ['./support-ticket.component.scss']
})

export class SupportTicketComponent {

  public ticketListStatus = ticketListStatus;

}
