import { Component, input } from '@angular/core';

@Component({
  selector: 'app-common-input',
  standalone: true,
  imports: [],
  templateUrl: './common-input.component.html',
  styleUrl: './common-input.component.css',
})
export class CommonInputComponent {
  titileLable = input<string>();
}
