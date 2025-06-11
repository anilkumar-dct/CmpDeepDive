import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-input',
  standalone: true,
  imports: [],
  templateUrl: './common-input.component.html',
  styleUrl: './common-input.component.css',
})
export class CommonInputComponent {
  @Input() titileLable: string | undefined;
  // titileLable = input<string>();

  ngOnInit() {
    console.log(this.titileLable);
  }
}
