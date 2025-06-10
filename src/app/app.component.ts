import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SeverStatusComponent } from './body/sever-status/sever-status.component';
import { TrafficDashboardComponent } from './body/traffic-dashboard/traffic-dashboard.component';
import { SupportTicketsComponent } from './body/support-tickets/support-tickets.component';
import { ITrafficData } from './app.Services';
import { SharedComponent } from './body/shared/shared.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    SeverStatusComponent,
    TrafficDashboardComponent,
    SupportTicketsComponent,
    SharedComponent,
    HeaderComponent,
  ],
})
export class AppComponent {}
