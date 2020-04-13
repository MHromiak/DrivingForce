import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { VolunteerStepperComponent } from '../steppers/volunteer-stepper/volunteer-stepper.component';

@Component({
  selector: 'app-register-volunteer',
  templateUrl: './register-volunteer.component.html',
  styleUrls: ['./register-volunteer.component.css']
})
export class RegisterVolunteerComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
  }

  register_vol(first_name, last_name, email, ph, pass, passconf) {
    this.authService.register_vol(first_name, last_name, email, ph, pass, passconf).subscribe(() => {
      if (this.authService.pass_match) {
        this.router.navigate(['/volunteer']);
      } else {
        alert("Passwords did not match");
      }
     });
  }
}
