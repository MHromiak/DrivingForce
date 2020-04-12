import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/home/home.component';
import { VolunteerComponent } from './component/volunteer/volunteer.component';
import { VolunteerApplyBtnComponent } from './component/volunteer-apply-btn/volunteer-apply-btn.component';
import { VolunteerDirectionBtnComponent } from './component/volunteer-direction-btn/volunteer-direction-btn.component';
import { RegisterVolunteerComponent } from './component/register-volunteer/register-volunteer.component';
import { RegisterOrgComponent } from './component/register-org/register-org.component';



import { MatSliderModule } from '@angular/material/slider';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VolunteerComponent,
    VolunteerApplyBtnComponent,
    VolunteerDirectionBtnComponent,
    RegisterVolunteerComponent,
    RegisterOrgComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
