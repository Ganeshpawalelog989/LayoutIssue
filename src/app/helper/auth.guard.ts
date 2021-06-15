import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from'@angular/router';

//import { CtserviceService } from '../ctservice.service';
import {UserService } from '../services/user.service'
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
constructor(
private router: Router,
//private authenticationService: CtserviceService
private authenticationService : UserService
) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
const currentUser = this.authenticationService.currentUserValue;
if (currentUser) {
// authorised so return true
return true;
}

// not logged in so redirect to login page
this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
return false;
}
}
