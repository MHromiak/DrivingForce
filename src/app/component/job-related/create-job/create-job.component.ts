import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private db: AngularFirestore,
    private router: Router, 
    private location: Location) { }

  ngOnInit(): void {
  }

  createJob(title, date, time, loc, desc) {
    let user = this.authService.getUser();

    this.db.doc(`Jobs/${title}`).get().toPromise().then(
      (data) => {
        if (data.exists) {
          // throw err - job already exists, cannot create
          alert("Job already exists");
          return;
        } else {
      // we add the organization email here because it is unique
          // this allows us to find the right organization that can edit the
          // event
          // can also add an image link or image upload
          return this.db.doc(`Jobs/${title}`).set({
            title: title,
            date: date,
            time: time,
            loc: loc,
            desc: desc,
            email: user.email,
            volunteers: [],
            images: []
          }).catch((error) => {
            alert(error);
          }).then(e => {
            alert("Job created!")
            this.location.back();
          })
        }
      }
    )

  //delete these lines after demo
  alert("Job created");
  this.location.back();
  }
}
