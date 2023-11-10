import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Position } from './services/admin/alertify.service';
import { AuthService } from './services/common/auth.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthService, private toastrService: CustomToastrService, private router: Router) {
    authService.identityCheck();
  }

  signOut() {
    localStorage.removeItem("accessToken");
    this.authService.identityCheck();
    this.router.navigate[""]; //anasayfaya yönlendiriyor.
    this.toastrService.message("Oturum kapatılmıştır.", "Oturum", {
      messageType: ToastrMessageType.Warning,
      position: ToastrPosition.TopRight
    })
  }
}
