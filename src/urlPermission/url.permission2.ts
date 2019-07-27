import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthentificationService} from '../services/authentification.service';

@Injectable()
export class UrlPermission2 implements CanActivate {

  constructor(private router: Router, private authService: AuthentificationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(this.authService.jwt);

    if (this.authService.jwt) {
      // logged in so return true
      console.log("choix");
      this.router.navigate(['/choix'], { queryParams: { returnUrl: state.url }});

      return true;
    }

    // not logged in so redirect to login page with the return url
    return false;
  }

}
