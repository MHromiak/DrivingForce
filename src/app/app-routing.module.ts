import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { VolunteerComponent } from './component/volunteer/volunteer.component';
import { OrgComponent } from './component/org/org.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent }
  { path: 'organization', component: OrgComponent },
  { path: 'volunteer', component: VolunteerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
