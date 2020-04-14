import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { environment } from '../environments/environment';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/home/home.component';
import { VolunteerComponent } from './component/volunteer/volunteer.component';
import { VolunteerApplyBtnComponent } from './component/volunteer-apply-btn/volunteer-apply-btn.component';
import { VolunteerDirectionBtnComponent } from './component/volunteer-direction-btn/volunteer-direction-btn.component';
import { RegisterVolunteerComponent } from './component/register-volunteer/register-volunteer.component';
import { RegisterOrgComponent } from './component/register-org/register-org.component';
import { VolunteerStepperComponent } from './component/steppers/volunteer-stepper/volunteer-stepper.component';
import { OrgStepperComponent } from './component/steppers/org-stepper/org-stepper.component';
import { CreateJobComponent } from './component/job-related/create-job/create-job.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { VolCarouselComponent } from './component/vol-carousel/vol-carousel.component';
import { OrgCarouselComponent } from './component/org-carousel/org-carousel.component';
import { OrgComponent } from './component/org/org.component';


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
    VolunteerStepperComponent,
    OrgStepperComponent,
    CreateJobComponent,
    PageNotFoundComponent,
    VolCarouselComponent,
    OrgCarouselComponent,
    OrgComponent,
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    MatSliderModule,
    MatMenuModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    CarouselModule,
    WavesModule,

  ],
  exports: [
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
