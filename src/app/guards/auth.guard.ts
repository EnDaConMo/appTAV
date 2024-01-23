import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('usuario')) {
      return true;
    } else {
      this.router.navigate(['pages/login']);
      return false;
    }
  }
/*  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const estaAutenticado = this.authService.logeado();

    if(estaAutenticado){
      return true;
    }else{
      this.router.navigateByUrl('/home');
      return false;
    }
  }
  */
}
