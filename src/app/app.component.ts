import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  items: Observable<any[]>;
  // can inject angular firestore to get information from db
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('volunteers').valueChanges();
    console.log(this.items);
  }

  ngOnInit(){
    this.title = 'DrivingForce';
  }

}
