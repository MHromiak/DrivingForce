import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteer-stepper',
  templateUrl: './volunteer-stepper.component.html',
  styleUrls: ['./volunteer-stepper.component.css']
})
export class VolunteerStepperComponent implements OnInit {
  match: boolean;
  error: boolean;
  authError: any;
  ngOnInit() {
    this.match = true;
    this.error = !this.match;
    this.authService.eventAuthError$.subscribe(data => {
      this.authError = data;
    });
  }

  constructor(private authService: AuthService, private router: Router) {

  }


  verifyPass(pass, passconf) {
    alert("a");
    if ((pass != "" && passconf != "") && pass != passconf) {
      this.match = false;
    } else {
    this.match = true;
    this.error = !this.match;
    }
  }

  register_vol(first_name, last_name, email, ph, pass, passconf) {
    // this.authService.register_vol(first_name, last_name, email, ph, pass, passconf).subscribe(() => {
    //   if (this.authService.pass_match) {
    //     this.router.navigate(['/volunteer']);
    //   } else {
    //     alert("Passwords did not match");
    //   }
    //  });
    this.authService.register_vol(first_name, last_name, email, ph, pass, passconf);
  }


}
