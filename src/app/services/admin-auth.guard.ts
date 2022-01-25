import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router, private cookie: CookieService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = this.cookie.get('jwt')
      if (token) {
        const token_component = JSON.parse(atob(token.split('.')[1]))
        if (token_component.is_admin) {
          return true
        } else {
          this.router.navigate(['/show-text'], { queryParams: { error: "Unauthorized Access. \n You don't have required rights to login." }, skipLocationChange: true })
          return false
        }
      } else {
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }, skipLocationChange: true })
        return false
      }
  }

}
