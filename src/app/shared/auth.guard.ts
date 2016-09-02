import { Injectable } from '@angular/core';
import { 
    CanActivate, 
    Router, 
    RouterStateSnapshot,
    ActivatedRouteSnapshot } from '@angular/router';

import { AuthenticationService } from './services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  private isLoggedIn = false;

  constructor(private authenticationService: AuthenticationService, private router: Router) { 
      authenticationService.isLoggedIn.subscribe(_ => this.isLoggedIn = _);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('AuthGuard#canActivate called with state', state);

    if(this.isLoggedIn) return true;
    else {
        this.router.navigate(['/login']);
        return this.isLoggedIn;
    }
  }
}