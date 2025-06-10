import { Component } from '@angular/core';
import { ButtonsComponent } from '../../../buttons/buttons.component';
import { CommonInputComponent } from '../../../common-input/common-input.component';

@Component({
  selector: 'app-new-tickets',
  standalone: true,
  imports: [ButtonsComponent, CommonInputComponent],
  templateUrl: './new-tickets.component.html',
  styleUrl: './new-tickets.component.css',
})
export class NewTicketsComponent {}
