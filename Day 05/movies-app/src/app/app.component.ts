import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  authStatus$: Observable<string>;

  constructor(private auth: AuthenticationService){}

  ngOnInit() {
    this.authStatus$ = this.auth.isLoggedIn().pipe(
      map(isLoggedIn => isLoggedIn ? 'logged in' : 'logged out')
    );
  }
}
