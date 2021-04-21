import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { Clientes } from '../../models/clientes';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  public cliente: Clientes;
  public solicitudes: any = [] //array para listar todas las solicitudes de cualquier tipo
  public correo: string;// este valor lo pasa el html

  constructor(private service: ClienteService) {
        this.cliente = new Clientes('', '', '', 0, '', '', '', '', '', 0, '')
  }

  ngOnInit(): void { // es para colocar las funciones que se ejecutan automaticamente al cargar el modulo
    this.Listar();
    this.BackBlock();
    
  }

  BackBlock() // bloquea que se pueda devolver a la pagina anterior por seguridad
  {
    window.location.hash = "no-back-button";
    window.location.hash = "Again-No-back-button"
    window.onhashchange = function () { window.location.hash = "no-back-button"; }
  }


  Buscar() {
    this.service.BuscarCliente(this.correo).subscribe((res: any) => {
      if (res.statusCode != 200) {
        alert('No hay Solicitudes');
      } else {
        this.solicitudes = res.customer;//parametro que devulve el controlador de la API en la funcion SearchCustomer
      }
    },
      (error) => {
        var errorMensaje = <any>error
        if (errorMensaje != null) {
          console.log(error)
        }
      }
    );



  }

  Listar() {
    this.service.Solicitudes().subscribe((res: any) => {
      if (res.statusCode != 200) {
        alert('No hay Solicitudes');
      } else {
        this.solicitudes = res.AllCustomers;//parametro que devulve el controlador de la API en la funcion SearchCustomer
      }
    },
      (error) => {
        var errorMensaje = <any>error
        if (errorMensaje != null) {
          console.log(error)
        }
      }
    );
  }

  guardarStorage(datosSolicitud) {
    const datos = JSON.stringify(datosSolicitud);
    localStorage.setItem('solicitud', datos);
  }

  EliminarSolicitud(id) {
    if (confirm('¿Esta seguro que desea eliminar la solicitud?')) {
      this.service.Eliminar(id).subscribe(
        (res: any) => {
          if (res.statusCode != 200) {
            alert('No se Pudo Eliminar la Solicitud')
          } else {
            alert('Solicitud Eliminada');
            window.location.reload();
          }
        },
        (err: any) => {
          console.log(err)
        }
      )
    }
  }


}


