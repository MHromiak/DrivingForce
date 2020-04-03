import {Component, OnInit} from '@angular/core';
// import {OrgUtilService} from '../../service/org/org-util.service';
// import {VolunteerUtilService} from '../../service/volunteer/volunteer-util.service';

@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.css']
})
export class OrgComponent implements OnInit {
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

//   constructor(orgService: OrgUtilService, private volunteerService: VolunteerUtilService) {
//     this.orgService = orgService;
//   }

//   ngOnInit() {
//     this.getAllJob();
//   }

//   showChat(job) {
//     console.log('show chat');
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
//       console.log('Typing');
//       job['chatText'] = {
//         sender: 'Organizor',
//         content: event.target.value
//       };
//     }
//   };

//   onEnterChat(event, job): any {
//     console.log('Enter key');
//     this.volunteerService.chatAdd(job);
//   };

//   showAddJob(): any {
//     this.showAddNewJob = !this.showAddNewJob;
//   }

//   createNewJobProp(event: any, field: any) {
//     this.newJobProp[field] = event.target.value;
//   }

//   updateJobProp(event: any, job: any, field: any) { // without type info
//     job.newProp[field] = event.target.value;
//     console.log(job.newProp);
//     console.log(event.target.value);
//     console.log(field);
//   }

//   getJobProp(field): any { // without type info
//     return this.newJobProp[field];
//   }

//   getKey(data): any {
//     return data.key;
//   }

//   getVal(data): any {
//     return data.payload.val();
//   }

//   showUpdate(job): any {
//     job.showUpdate = !job.showUpdate;
//   }


//   assignJobVolunteer(jobKey: any, volunteers: any): any {
//     this.orgService.assignJobVolunteer(jobKey, volunteers);
//   }

//   updateJob(job: any): any {
//     console.log(job.payload.val());
//     console.log(job.key);
//     this.orgService.updateJob(job.key, job.newProp);
//   }

//   deleteJob(jobKey): any {
//     this.orgService.deleteJob(jobKey);
//   }

//   deleteAllJob(): any {
//     this.orgService.deleteAllJob();
//   }

//   getAllJob(): any {
//     this.orgService.getAllJob().subscribe(data => {
//       this.allJob = data;
//       this.allJob.forEach(function (val, index) {
//         val['showUpdate'] = false;
//         val['showChat'] = false;
//         val['chatText'] = {
//           sender: '',
//           content: ''
//         };
//         val['chatContent'] = [];
//         val['newProp'] = {
//           name: val.payload.val().name,
//           orgName: val.payload.val().orgName,
//           description: val.payload.val().description,
//           volunteers: val.payload.val().volunteers,
//           location: val.payload.val().location,
//           status: val.payload.val().status,
//           start: val.payload.val().start,
//           end: val.payload.val().end,
//         };
//       });
//     });
//   }

//   createNewJob(): any {
//     this.orgService.createNewJob({
//       name: this.newJobProp.name,
//       orgName: this.newJobProp.orgName,
//       description: this.newJobProp.description,
//       volunteers: this.newJobProp.volunteers,
//       location: this.newJobProp.location,
//       status: this.newJobProp.status,
//       start: this.newJobProp.start,
//       end: this.newJobProp.end
//     });
//   }

ngOnInit(){}

//TODO: DELETE
}

