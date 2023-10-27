import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/common/auth.service';
import { UserService } from 'src/app/services/common/models/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService: UserService, private authService: AuthService) {

  }

  async login(usernameOrEmail: string, password: string) {
    await this.userService.login(usernameOrEmail, password, () => this.authService.identityCheck());
  }
}
