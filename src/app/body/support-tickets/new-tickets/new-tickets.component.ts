import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
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
  // input: ITicket = {
  //   title: '',
  //   request: '',
  // };
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  @Output() submit = new EventEmitter<ITicket>();
  // Use of Template for getting input from user
  onSubmit(title: string, request: string) {
    this.submit.emit({
      title: title,
      request: request,
    });
    this.form?.nativeElement.reset();
  }
}
