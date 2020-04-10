import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
   }

  setMessage() {
    this.message = 'Logged' + (this.authService.v_isLoggedIn ? 'in' : 'out');
  }

  ngOnInit() {
  }

  login_volunteer() {
    // alert("Clicked vol");
    this.message = "Logging in as a volunteer";
    this.authService.login_volunteer().subscribe(() => {
      this.setMessage();
      if (this.authService.v_isLoggedIn) {
        const redirUrl = '/volunteer';

        this.router.navigate([redirUrl]);
      }
    });
  }

  logout_volunteer() {
    this.authService.logout_volunteer();
    this.message = "Logging out";
    this.router.navigate(['/home']);
  }

  login_org() {
    
    this.message = "Logging in as a volunteer";
    this.authService.login_org().subscribe(() => {
      this.setMessage();
      if (this.authService.o_isLoggedIn) {
        const redirUrl = '/organization';

        this.router.navigate([redirUrl]);
      }
    });
  }

  logout_org() {
    this.authService.logout_org();
    this.message = "Logging out";
    this.router.navigate(['/home']);
  }
}
