import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authError: any;
  message: string;
  hide = true;
  options: FormGroup;
  identityControl = new FormControl("volunteer");
  user: firebase.User;

  navbar: NavbarComponent;
  show: boolean;
  constructor(public authService: AuthService, public router: Router, fb: FormBuilder) {
    this.show = true;
    this.options = fb.group({
      identity: this.identityControl,
    })
   }

  ngOnInit() {
    this.authService.eventAuthError$.subscribe(data => {
      this.authError = data;
    })
  }

  toggleProgress() {
    this.show = !this.show;
  }

  loginService(email, password){
    if (this.identityControl.value == "volunteer"){
      this.authService.login_volunteer(email, password);
    } else {
      this.authService.login_org(email, password);
    }
  }

  registerService(){
    if (this.identityControl.value == "volunteer"){
      this.to_register_vol();
    } else {
      this.to_register_org();
    }
  }

  // login_volunteer(email, password) {
  //   this.message = "logging in as a volunteer";
  //   this.authService.login_volunteer().subscribe(() => {
  //     // this.setMessage();
  //     if (this.authService.v_isLoggedIn) {
  //       const redirUrl = '/volunteer';

  //       this.router.navigate([redirUrl]);
  //     }
  //   });
  // }

  // logout_volunteer() {
  //   this.authService.logout();
  //   this.message = "logging out";
  //   this.router.navigate(['/home']);
  // }

  // login_org(email, password) {
    
  //   this.message = "logging in as an organization";
  //   this.authService.login_org().subscribe(() => {
  //     // this.setMessage();
  //     if (this.authService.o_isLoggedIn) {
  //       const redirUrl = '/organization';

  //       this.router.navigate([redirUrl]);
  //     }
  //   });
  // }

  to_register_vol() {
    this.router.navigate(['/register/volunteer']);
  }

  to_register_org() {
    this.router.navigate(['/register/organization']);
  }

}
