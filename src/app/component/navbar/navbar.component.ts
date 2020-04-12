import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
  }


  //TODO: can both be logged in at the same time?
  home() {
    if (this.authService.v_isLoggedIn) {
      alert("to vol");
      this.router.navigate(['/volunteer/register'])
    } else if (this.authService.o_isLoggedIn) {
      alert("to org");
      this.router.navigate(['organization']);
    } else {
      this.router.navigate(['/home/']);
    }
  }

  logout() {
    if (this.authService.v_isLoggedIn) {
      alert("to vol");
      this.authService.logout_volunteer();
      this.router.navigate(['/home/']);
    } else if (this.authService.o_isLoggedIn) {
      alert("to org");
      this.authService.logout_org();
      this.router.navigate(['/home/']);
    } else {
      alert("You are not logged in");
    }
  }
}
