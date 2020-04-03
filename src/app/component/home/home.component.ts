import { Component, OnInit } from '@angular/core';
import { LoginOrgComponent } from 'src/app/auth/login-org/login-org.component';
import { LoginVolunteerComponent } from 'src/app/auth/login-volunteer/login-volunteer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  log_vol: LoginVolunteerComponent;
  log_org: LoginOrgComponent;

  constructor() { }

  ngOnInit() {
  }

  login_volunteer(): void {
    alert("Clicked vol");
    // this.log_vol.login_volunteer();
  }

  login_org(): void {
    alert("clicked org");
    // this.log_org.login_org();
  }
}
