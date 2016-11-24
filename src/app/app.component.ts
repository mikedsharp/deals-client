import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'daily-deals',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  providers: [AuthService]
})
export class AppComponent {
  title = 'Daily Deals';

  constructor(private authService: AuthService) {}
}
