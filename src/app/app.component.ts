import { Component } from '@angular/core';
import { AuthService } from './services/common/auth.service';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthService) {
    authService.identityCheck();
  }
}
