import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/home/home.component';
import { VolunteerComponent } from './component/volunteer/volunteer.component';
import { VolunteerApplyBtnComponent } from './component/volunteer-apply-btn/volunteer-apply-btn.component';
import { VolunteerDirectionBtnComponent } from './component/volunteer-direction-btn/volunteer-direction-btn.component';

import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VolunteerComponent,
    VolunteerApplyBtnComponent,
    VolunteerDirectionBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
