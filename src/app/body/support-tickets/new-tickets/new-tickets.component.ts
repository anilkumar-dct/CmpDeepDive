import { Component } from '@angular/core';
import { ButtonsComponent } from '../../../buttons/buttons.component';

@Component({
  selector: 'app-new-tickets',
  standalone: true,
  imports: [ButtonsComponent],
  templateUrl: './new-tickets.component.html',
  styleUrl: './new-tickets.component.css',
})
export class NewTicketsComponent {}
