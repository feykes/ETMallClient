import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/common/auth.service';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { UserAuthService } from 'src/app/services/common/models/user-auth.service';
import { UserService } from 'src/app/services/common/models/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userAuthService: UserAuthService, private authService: AuthService, private activatedRoute: ActivatedRoute, private router: Router, private socialAuthService: SocialAuthService) {
    this.socialAuthService.authState.subscribe(async (user: SocialUser) => {
      console.log(user);
      await this.userAuthService.googleLogin(user, () => {
        this.authService.identityCheck();
      });
    });
  }

  async login(usernameOrEmail: string, password: string) {
    await this.userAuthService.login(usernameOrEmail, password, () => {
      this.authService.identityCheck();
      this.activatedRoute.queryParams.subscribe(params => { //giriş yapılmadan önce routedan adres verilirse önce login sayfasında giriş yapılıyor. Daha sonra bu kod sayesinde başta istenen yere yönlendiriliyor
        const returnUrl: string = params["returnUrl"];
        if (returnUrl)
          this.router.navigate([returnUrl])
      });
    });
  }
}
