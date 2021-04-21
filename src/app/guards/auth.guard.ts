import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {ClienteService} from '../services/cliente.service'


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private servicio:ClienteService,private router:Router){}

  canActivate(){
    if(this.servicio.getToken()){
      //login true
      return true;
    }else{
      this.router.navigate(['']);
      return false;
    }
    
  }
  /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }*/
  
}
