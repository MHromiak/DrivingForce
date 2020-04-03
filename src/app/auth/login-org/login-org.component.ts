import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-org',
  templateUrl: './login-org.component.html',
  styleUrls: ['./login-org.component.css']
})
export class LoginOrgComponent implements OnInit {

 

  ngOnInit(): void {
  }

  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.v_isLoggedIn ? 'in' : 'out');
  }

  login_org() {
    this.message = 'Trying to log in ...';

    this.authService.login_volunteer().subscribe(() => {
      this.setMessage();
      this.router.navigate(['/orginization']);
      // if (this.authService.v_isLoggedIn) {
      //   const redirectUrl = '/organization';

      //   // Set our navigation extras object
      //   // that passes on our global query params and fragment
      //   let navigationExtras: NavigationExtras = {
      //     queryParamsHandling: 'preserve',
      //     preserveFragment: true
      //   };

      //   // Redirect the user
      //   this.router.navigate([redirectUrl], navigationExtras);
      // }
    });
  }

  logout() {
    this.authService.logout_volunteer();
    this.setMessage();
  }

}
