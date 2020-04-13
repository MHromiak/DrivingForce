import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {

  constructor(
    private db: AngularFirestore,
    private router: Router, 
    private location: Location) { }

  ngOnInit(): void {
  }

  createJob(title, date, time, loc, desc) {
    return this.db.doc(`Jobs/${title}`).set({
      title: title,
      date: date,
      time: time,
      loc: loc,
      desc: desc
    }).catch((error) => {
      alert(error);
    }).then(e => {
      alert("Job created!")
      this.location.back();
    })
  }
}
