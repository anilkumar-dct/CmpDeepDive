import { Component, Input } from '@angular/core';

@Component({
  selector: 'button[app-buttons]',
  standalone: true,
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css',
})
export class ButtonsComponent {
  @Input({ required: true }) button!: string;
  @Input({ required: true }) icon!: string;
}
