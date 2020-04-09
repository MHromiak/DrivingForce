import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;

  // can inject angular firestore to get information from db
  constructor(firestore: AngularFirestore) {
  }

  ngOnInit(){
    this.title = 'DrivingForce';
  }

}
