import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-org-stepper',
  templateUrl: './org-stepper.component.html',
  styleUrls: ['./org-stepper.component.css']
})
export class OrgStepperComponent implements OnInit {
  match: boolean;
  error: boolean;
  constructor(public authService: AuthService, public router: Router) {
    this.match = true;
    this.error = !this.match;
  }

  ngOnInit(): void {
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

  register_org(org_name, address, rep_name, email, pass, passconf) {
    this.authService.register_org(org_name, address, rep_name, email, pass, passconf).subscribe(() => {
      if (this.authService.pass_match) {
        this.router.navigate(['/organization']);
      } else {
        alert("Passwords did not match");
      }
     });
  }
}
