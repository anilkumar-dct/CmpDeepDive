import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonsComponent } from '../../../buttons/buttons.component';
import { CommonInputComponent } from '../../../common-input/common-input.component';
import { FormsModule } from '@angular/forms';
export interface ITicket {
  title: string;
  request: string;
}
@Component({
  selector: 'app-new-tickets',
  standalone: true,
  imports: [ButtonsComponent, CommonInputComponent, FormsModule],
  templateUrl: './new-tickets.component.html',
  styleUrl: './new-tickets.component.css',
})
export class NewTicketsComponent {
  input: ITicket = {
    title: '',
    request: '',
  };
  @Output() submit = new EventEmitter<ITicket>();

  onSubmit() {
    this.submit.emit({
      title: this.input.title,
      request: this.input.request,
    });
  }
}
