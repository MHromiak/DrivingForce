import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, throwError } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();

  v_isLoggedIn = false;
  o_isLoggedIn = false;
  pass_match = false;

  redirectUrl: string;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router) { this.user = {}; }

  getUser() {
    return this.user;
  }

  getUserState() {
    return this.afAuth.authState;
  }

  ////////Login//////////
  login_volunteer(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .catch((error) => {
        this.eventAuthError.next(error);
        console.log(error);
      });
      // .then(userCredentials => {
        // if(userCredentials) {
        //   this.user.uid = userCredentials.user.uid;
        //   this.db.doc(`Volunteers/${userCredentials.user.uid}`).get()
        //     .toPromise().then(res => {
        //     if (res.exists) {
              this.v_isLoggedIn = true;
              this.router.navigate(['/volunteer'])
      //       } else {
      //         let err = "email is not registered as a volunteer";
      //         throw new Error(err);
      //       }
      //   }).catch((err) => {
      //     this.eventAuthError.next(err);
      //   });
      // }
    // };//);
    
  }

  login_org(email: string, password: string) {
    
    this.afAuth.signInWithEmailAndPassword(email, password)
      .catch((error) => {
        this.eventAuthError.next(error);
      })
      // .then(userCredentials => {
        // if(userCredentials) {
        //   this.user.uid = userCredentials.user.uid;
        //   this.db.doc(`Organizations/${userCredentials.user.uid}`).get()
        //     .toPromise().then(res => {
        //       if (res.exists) {
                this.o_isLoggedIn = true;
                this.router.navigate(['/organization'])
            //   } else {
            //     let err = "email is not registered as an organization";
            //     throw new Error(err);
            //   }
            // }).catch((error) => {
            //   this.eventAuthError.next(error);
            // })
        // }
      // };//);
    
  }

  logout() {
    if (!(this.o_isLoggedIn  || this.v_isLoggedIn)) {
      alert("You are not logged in");
    } else {
      this.o_isLoggedIn = false;
      this.v_isLoggedIn = false;
      this.afAuth.signOut();
      alert("You have now been logged out");
      this.router.navigate(['/home']);
    }
  
  }

  ////Registration////
  register_org(org_name, address, rep_name, email, pass, passconf) {
    // this.afAuth.createUserWithEmailAndPassword(email, pass)
    //   .then(userCredentials => {
        if (pass !== passconf) throw Error("Passwords do not match");

        this.user = {};
        this.user.email = email;
        this.user.org_name = org_name;
        this.user.rep_name = rep_name;
        this.user.pass = pass;
        this.user.address = address;

        // userCredentials.user.updateProfile({
        //   displayName: org_name
        // });

        console.log(this.user);

        // this.insertOrgData(userCredentials)
          //.then(() => {
        this.o_isLoggedIn = true;
        this.router.navigate(['/organization']);
          //})
      // }).catch((error) => {
      //   console.log(error);
      //   this.eventAuthError.next(error);
      // });
  }

  register_vol(first, last, email, ph, pass, passconf) {
    // this.afAuth.createUserWithEmailAndPassword(email, pass)
    //   .then(userCredentials => {
        if (pass !== passconf) throw Error("Passwords do not match");

        this.user = {};
        this.user.email = email;
        this.user.pnumber = ph;
        this.user.pass = pass;
        this.user.firstname = first;
        this.user.lastname = last;

        // userCredentials.user.updateProfile({
        //   displayName: first + " " + last
        // });

        // this.insertVolunteerData(userCredentials)
          //.then(() => {
            this.v_isLoggedIn = true;
            this.router.navigate(['/volunteer']);
          //})
      // }).catch((error) => {
      //   this.eventAuthError.next(error);
      // });
  }

  insertOrgData(userCredential: firebase.auth.UserCredential) {
    return this.db.doc(`Organizations/${userCredential.user.uid}`).set({
      email: this.user.email,
      org_name: this.user.org_name,
      rep_name: this.user.rep_name,
      address: this.user.address,
      jobscreated: []
    })
  }

  insertVolunteerData(userCredential: firebase.auth.UserCredential) {
    return this.db.doc(`Volunteers/${userCredential.user.uid}`).set({
      email: this.user.email,
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      phone: this.user.pnumber,
      jobsregistered: []
    })
  }
}
