// import {OrgUtilService} from '../../service/org/org-util.service';
// import {VolunteerUtilService} from '../../service/volunteer/volunteer-util.service';
import {Component, ViewChild, ChangeDetectorRef, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';
// import {DirectionsRenderer} from '@ngui/map';
// import {volunteer} from '../volunteer';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
 export class VolunteerComponent implements OnInit {


  constructor(public authService: AuthService, public router: Router) {

  } 




  ngOnInit(){}

  toJobs() {
    this.router.navigate(['/volunteer/jobs']);
  }

  apply() {
    this.router.navigate(['volunteer/apply']);
  }

}


