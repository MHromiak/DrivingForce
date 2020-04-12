import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  v_isLoggedIn = false;
  o_isLoggedIn = false;
  pass_match = false;

  redirectUrl: string;


  ////////Login//////////
  login_volunteer(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.v_isLoggedIn = true)
    );
  }

  logout_volunteer(): void {
    this.v_isLoggedIn = false;
  }



  login_org(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.o_isLoggedIn = true)
    );
  }

  logout_org(): void {
    this.o_isLoggedIn = false;
  }




  ////Registration////
  register_org(org_name, address, rep_name, email, pass, passconf): Observable<boolean> {
    this.pass_match = false;
    if (pass == passconf) {
      this.pass_match = true;
    }
    return of(true).pipe(
        delay(1000)
    );
  }

  register_vol(first, last, email, ph, pass, passconf) {
    this.pass_match = false;
    if (pass == passconf) {
      this.pass_match = true;
    }
    return of(true).pipe(
        delay(1000)
    );
  }
}
