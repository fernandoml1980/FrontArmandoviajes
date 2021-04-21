import { unsupported } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {ClienteService} from '../../services/cliente.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(private router:Router, private service:ClienteService) { }

  condicion: boolean=false;

  ngOnInit(): void {
    this.BackBlock();
    this.Condicion();
  }

  

  BackBlock() // bloquea que se pueda devolver a la pagina anterior por seguridad
  {
    window.location.hash = "no-back-button";
    window.location.hash = "Again-No-back-button"
    window.onhashchange = function () { window.location.hash = "no-back-button"; }
  }

  FormLogin(){
    this.router.navigateByUrl('/login')
    this.Condicion()
  }

  FormLogout(){
    this.service.logout()
    this.router.navigateByUrl('')
    this.Condicion();
  }

  Condicion(){ // funcion para control del ngIf
    let token:string= localStorage.getItem('ACCESS_TOKEN');
    if(token != null){
      this.condicion=true
    }else{
      this.condicion=false
    }
  
  }


}
