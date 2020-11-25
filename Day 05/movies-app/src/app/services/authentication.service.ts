import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticated: boolean = false;
  private status$ = new BehaviorSubject<boolean>(this.isAuthenticated);

  constructor() { }

  isLoggedIn(): Observable<boolean> {
    return this.status$.asObservable();
  }

  async login() {
    this.isAuthenticated = true;
    this.status$.next(this.isAuthenticated);
  }

  async logout() {
    this.isAuthenticated = false;
    this.status$.next(this.isAuthenticated);

  }
}
