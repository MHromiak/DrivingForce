import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  v_isLoggedIn = false;

  redirectUrl: string;

  login_volunteer(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.v_isLoggedIn = true)
    );
  }

  logout_volunteer(): void {
    this.v_isLoggedIn = false;
  }
}
