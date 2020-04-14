import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-org-stepper',
  templateUrl: './org-stepper.component.html',
  styleUrls: ['./org-stepper.component.css']
})
export class OrgStepperComponent implements OnInit {
  match: boolean;
  error: boolean;
  authError: any;
  @ViewChild('stepper') private myStepper: MatStepper;
  constructor(public authService: AuthService, public router: Router) {
    this.match = true;
    this.error = !this.match;
  }

  ngOnInit(): void {
    this.authService.eventAuthError$.subscribe(data => {
      this.authError = data;
    });
  }

  goForward(stepper: MatStepper){
    stepper.next();
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

  register_org(org_name, address, rep_name, email, pass, passconf) {
    // this.authService.register_org(org_name, address, rep_name, email, pass, passconf).subscribe(() => {
    //   if (this.authService.pass_match) {
    //     this.router.navigate(['/organization']);
    //   } else {
    //     alert("Passwords did not match");
    //   }
    //  });
    this.authService.register_org(org_name, address, rep_name, email, pass, passconf);
  }
}
