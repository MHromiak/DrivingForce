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
//   // @ViewChild(DirectionsRenderer) directionsRendererDirective: DirectionsRenderer;

//   // directionsRenderer: google.maps.DirectionsRenderer;
//   // directionsResult: google.maps.DirectionsResult;
//   direction: any = {
//     origin: '1060 Court Drive, Duluth GA 30096',
//     destination: 'Georgia Institute of Technology',
//     travelMode: 'DRIVING'
//   };

//   // private orgService: any;
//   // private volunteer: any;
//   allJob: any[] = [{
//     jobKey: '',
//     jobData: {
//       name: ''
//     }
//   }];
//   private jobProp: any = {
//     name: '',
//     orgName: '',
//     description: '',
//     volunteers: '',
//     location: '',
//     status: '0',
//     start: '',
//     end: ''
//   };
//   private jobApplied = false;
//   private userInfo = {
//     name: '',
//     email: '',
//     phone: '',
//     address: ''
//   };

//   constructor(private orgService: OrgUtilService, private volunteerService: VolunteerUtilService, private cdr: ChangeDetectorRef) {
//   }

constructor(public authService: AuthService, public router: Router) {

}

goHome() {
  this.authService.logout_volunteer();
  this.router.navigate(['/home']);
}


ngOnInit(){}
//   ngOnInit() {
//     this.getAllJob();
//     this.directionsRendererDirective['initialized$'].subscribe(directionsRenderer => {
//       this.directionsRenderer = directionsRenderer;
//     });
//   }

//   onTypingInfo(event, field) {
//     this.userInfo[field] = event.target.value;
//   };

//   updateVolunteer(job) {
//     this.volunteerService.applyJob(job.key, this.userInfo.email);
//   };

//   chatSubs(jobKey) {

//   }

//   applyJob(job) {
//     job['jobApplied'] = !job['jobApplied'];
//   }

//   submitApp(job) {

//   }

//   showChat(job) {
//     job['showChat'] = !job['showChat'];
//     this.volunteerService.chatSubs(job).subscribe(
//       content => {
//         job['chatContent'] = content;
//         console.log(content);
//       });
//   }

//   onTypingChat(event, job): any {
//     if (event.keyCode === 13) {
//       this.onEnterChat(event, job);
//     } else {
//       console.log("Typing");
//       job['chatText'] = {
//         sender: 'Volunteer',
//         content: event.target.value
//       };
//     }
//   };

//   onEnterChat(event, job): any {
//     console.log("Enter key");
//     this.volunteerService.chatAdd(job);
//   };

//   getDirection(job) {
//     this.direction = {
//       origin: 'Georgia Institute of Technology',
//       destination: job.payload.val().location,
//       travelMode: 'DRIVING'
//     };
//     this.directionsChanged();
//   }

//   directionsChanged() {
//     this.directionsResult = this.directionsRenderer.getDirections();
//     this.cdr.detectChanges();
//   }

//   showDirection() {
//     this.directionsRendererDirective['showDirections'](this.direction);
//   }

//   getAllJob(): any {
//     this.orgService.getAllJob().subscribe(data => {
//       this.allJob = data;
//       this.allJob.forEach(function (val, index) {
//         val['showChat'] = false;
//         val['chatText'] = {
//           sender: '',
//           content: ''
//         };
//         val['chatContent'] = [];
//         val['jobApplied'] = false;
//       })
//     });
//   }
}
