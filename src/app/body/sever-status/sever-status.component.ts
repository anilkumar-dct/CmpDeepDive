import { Component } from '@angular/core';

@Component({
  selector: 'app-sever-status',
  standalone: true,
  imports: [],
  templateUrl: './sever-status.component.html',
  styleUrl: './sever-status.component.css',
})
export class SeverStatusComponent {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  //changing status every 5 seconds time intervel
  /**
   *
   */
  constructor() {
    setInterval(() => {
      let ran = Math.random();
      if (ran < 0.5) {
        this.currentStatus = 'online';
      } else if (ran < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }
}
