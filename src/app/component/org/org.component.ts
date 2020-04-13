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
  ngOnInit() {

  }
//   private orgService: any;
//   allJob: any[] = [{
//     jobKey: '',
//     jobData: {
//       name: ''
//     },
//     newProp: {
//       name: '',
//       orgName: '',
//       description: '',
//       volunteers: '',
//       location: '',
//       status: '',
//       start: '',
//       end: '',
//     }
//   }];
//   private newJobProp: any = {
//     name: '',
//     orgName: '',
//     description: '',
//     volunteers: '',
//     location: '',
//     status: '0',
//     start: '',
//     end: ''
//   };
  showAddNewJob = false;
  private showUpdateJob = false;

  constructor(public authService: AuthService, public router: Router) {
    
  }

  toCreateJob() {
    this.router.navigate(['/organization/create-job'])
  }


  

}
