import { Component } from '@angular/core';
import {
  ITicket,
  NewTicketsComponent,
} from './new-tickets/new-tickets.component';
import { TicketComponent } from '../../ticket/ticket.component';

export interface Ticket {
  id: string;
  title: string;
  request: string;
  status: 'open' | 'closed';
}

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [NewTicketsComponent, TicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css',
})
export class SupportTicketsComponent {
  tickets: Ticket[] = [];

  valueSubmitted(value: ITicket) {
    console.log(value);

    this.tickets.push({
      id: Math.random().toString(),
      ...value,
      status: 'open',
    });
  }
}
