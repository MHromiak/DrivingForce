import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginVolunteerComponent } from './login-volunteer/login-volunteer.component';
import { LoginOrgComponent } from './login-org/login-org.component';



@NgModule({
  declarations: [LoginVolunteerComponent, LoginOrgComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
