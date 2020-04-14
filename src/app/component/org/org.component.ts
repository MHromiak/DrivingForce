import {Component, OnInit} from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
// import {OrgUtilService} from '../../service/org/org-util.service';
// import {VolunteerUtilService} from '../../service/volunteer/volunteer-util.service';

@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.css']
})
export class OrgComponent implements OnInit {


  constructor(public authService: AuthService, public router: Router) {
    
  }

  ngOnInit() {

  }

  toCreateJob() {
    this.router.navigate(['/organization/create-job']);
  }

  toJobs() {
    this.router.navigate(['/organization/jobs']);
  }

  
}

  


