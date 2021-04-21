import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Clientes } from '../../models/clientes'
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  public cliente: Clientes;
  public datoStorage: any;

  constructor(private servicio: ClienteService, private router: Router) {
    this.cliente = new Clientes('', '', '', 0, '', '', '', '', '', 0, '');
  }

  ngOnInit(): void {
    this.DatosSolicitud()// ejecuta la funcion despues del constructor automaticamente
    this.BackBlock()
  }

  BackBlock() // bloquea que se pueda devolver a la pagina anterior por seguridad
  {
     window.location.hash="no-back-button";
     window.location.hash="Again-No-back-button"
     window.onhashchange=function(){window.location.hash="no-back-button";}   
  }

  

  DatosSolicitud() { //trae los datos del formulario que listarcomponent.guardarStorage(datosSolicitud) almaceno en storage
    this.datoStorage = JSON.parse(localStorage.getItem('solicitud'));
  }

  Actualizar() {
    if (confirm('¿Esta seguro de modificar la información?')) {
      this.servicio.Actualizar(this.datoStorage._id, this.datoStorage).subscribe(
        (res: any) => {
          if (res.statusCode != 200) {
            alert('No se Actualizo la Información')
          } else {
            alert('Datos Actualizados')
            localStorage.removeItem('solicitud') // limpia los datos del storage del navegador
            this.router.navigate(['/listar']);
          }
        },
        (error) => {
          var error = <any>(error)
          console.log(error)
        }

      )
    }
  }

}


