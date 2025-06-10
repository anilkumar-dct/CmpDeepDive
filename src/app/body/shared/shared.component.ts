import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-shared',
  standalone: true,
  imports: [],
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.css',
})
export class SharedComponent {
  // @Input({ required: true }) image!: { src: string; alt: string };
  // @Input({ required: true }) title!: string;
  image = input.required<{ src: string; alt: string }>();
  title = input<string>();
}
