import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { VolunteerComponent } from './component/volunteer/volunteer.component';
import { OrgComponent } from './component/org/org.component';
import { RegisterVolunteerComponent } from './component/register-volunteer/register-volunteer.component';
import { RegisterOrgComponent } from './component/register-org/register-org.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { CreateJobComponent } from './component/job-related/create-job/create-job.component';
import { OrgCarouselComponent } from './component/org-carousel/org-carousel.component';
import { VolCarouselComponent } from './component/vol-carousel/vol-carousel.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent }
  { path: 'organization', component: OrgComponent },
  { path: 'organization/create-job', component: CreateJobComponent},
  { path: 'organization/jobs', component: OrgCarouselComponent},
  
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'volunteer/jobs', component: VolCarouselComponent },
  { path: 'register/volunteer', component: RegisterVolunteerComponent },
  { path: 'register/organization', component: RegisterOrgComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
