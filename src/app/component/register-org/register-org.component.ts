import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-org',
  templateUrl: './register-org.component.html',
  styleUrls: ['./register-org.component.css']
})
export class RegisterOrgComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) {

   }

  ngOnInit(): void {
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
