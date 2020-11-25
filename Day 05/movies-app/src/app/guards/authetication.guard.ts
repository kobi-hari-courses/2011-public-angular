import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AutheticationGuard implements CanActivate {
  constructor(
    private auth: AuthenticationService, 
    private router: Router
    ){}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Promise<boolean | UrlTree> {

      console.log('starting auth guard');      

      let isLoggedIn = await this.auth
        .isLoggedIn().pipe(take(1))        
        .toPromise();

      console.log('auth guard is logged in = ' + isLoggedIn);

      if (isLoggedIn) return true;

      let url = state.url;

      this.auth.isLoggedIn().pipe(
        filter(status => status === true), 
        take(1)
      ).subscribe(_ => {
        this.router.navigateByUrl(url);
      });
      

      return this.router.createUrlTree(['account']);
  }


}
