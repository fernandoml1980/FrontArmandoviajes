import { unsupported } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usuario:string='admin';
  public clave:string='admin';
  public login:string='';
  public desbloquear:string='';
  public usuarioEnviado:string='';
  public claveEnviada:string='';
  public limpiarUsu='';
  public limpiarClave='';

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.BackBlock();
  }

  BackBlock() // bloquea que se pueda devolver a la pagina anterior por seguridad
{
   window.location.hash="no-back-button";
   window.location.hash="Again-No-back-button"
   window.onhashchange=function(){window.location.hash="no-back-button";}   
}

  FormLogin(){
    this.router.navigateByUrl('/login')
  }


}
