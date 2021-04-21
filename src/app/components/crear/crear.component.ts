import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Clientes } from '../../models/clientes';
import { ClienteService } from '../../services/cliente.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public clientes: Clientes;
  public defaultTel = ""

  constructor(private clienteService: ClienteService,private router:Router) {
    this.clientes = new Clientes('', '', '', null, '', '', '', '', '', null, '')//inicializa el objeto
  }

  ngOnInit(): void {
    this.BackBlock()
  }


  BackBlock() // bloquea que se pueda devolver a la pagina anterior por seguridad
  {
    window.location.hash = "no-back-button";
    window.location.hash = "Again-No-back-button"
    window.onhashchange = function () { window.location.hash = "no-back-button"; }
  }

  Registrar() {
    this.clienteService.RegistrarCliente(this.clientes).subscribe( //.subscribe 
      (res: any) => {
        if (res.statusCode != 200) {
          alert(' No se pudo enviar la Solicitud')
        } else {
          alert('Solicitud Enviada');
          //window.location.reload();// si se activa, se desactiva navigateByUrl
          this.router.navigateByUrl("");

        }
      }, (error) => {
        var errorMensaje = <any>error;
        if (errorMensaje != null) {
          console.log(errorMensaje)
          alert('Error al enviar la solicitud, por favor validar que el formulario tenga todos los campos diligenciados y en el formato correcto')
        }
      }

    )
  }

}
