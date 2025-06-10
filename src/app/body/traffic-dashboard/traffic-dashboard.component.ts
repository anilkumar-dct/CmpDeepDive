import { Component, inject } from '@angular/core';
import { AppServices, ITrafficData } from '../../app.Services';

@Component({
  selector: 'app-traffic-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './traffic-dashboard.component.html',
  styleUrl: './traffic-dashboard.component.css',
})
export class TrafficDashboardComponent {
  private appServices = inject(AppServices);

  get dummyTrafficData(): ITrafficData[] {
    return this.appServices.getdummyTrafficeData;
  }
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
}
