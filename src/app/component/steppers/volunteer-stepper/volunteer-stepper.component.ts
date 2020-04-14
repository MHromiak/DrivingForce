import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-volunteer-stepper',
  templateUrl: './volunteer-stepper.component.html',
  styleUrls: ['./volunteer-stepper.component.css']
})
export class VolunteerStepperComponent implements OnInit {
  match: boolean;
  error: boolean;
  @ViewChild('stepper') private myStepper: MatStepper;
  ngOnInit() {
    this.match = true;
    this.error = !this.match;
  }

  goForward(stepper: MatStepper){
    stepper.next();
  }

  constructor(private authService: AuthService, private router: Router) {

  }


  verifyPass(pass, passconf) {
    if ((pass != "" && passconf != "") && pass != passconf) {
      this.match = false;
      alert("Passwords did not match");
    } else {
    this.match = true;
    this.error = !this.match;
    this.goForward(this.myStepper);
    }
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
