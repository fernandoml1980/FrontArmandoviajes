/*conexion entre el front y el back */

import { Injectable } from '@angular/core'; //se encarga de enviar la informacion
import { HttpClient, HttpHeaders } from '@angular/common/http'; // cabeceras 
import { observable, Observable } from 'rxjs'; // vigila las ejecuciones que se realizan


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiURL = 'http://localhost:3000/Clientes'; // conexion con la api

  constructor(private _http: HttpClient) { } //_http es una variable privada

  // funcion post
  RegistrarCliente(costumerParam): Observable<any> {
    let params = JSON.stringify(costumerParam);// conge el objeto y lo guarda como JSON
    let options = new HttpHeaders().set('Content-type', 'application/json');

    //return this._http.post(this.apiURL+'/clientes/crear',params,{headers:options}).pipe((res)=>res); // pipe es la tuberia de conexion entre angular y la api
    return this._http.post(this.apiURL + '/Crear', params, { headers: options }).pipe((res) => res);

  }

  BuscarCliente(correo): Observable<any> {
    let options = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    }

    return this._http.get(this.apiURL + '/Buscar/' + correo, options).pipe((res) => res);

  }

  Solicitudes(): Observable<any> {
    let options = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    }

    return this._http.get(this.apiURL + '/Listar/Todos', options).pipe((res) => res);

  }


  Actualizar(id, datoActualizado): Observable<any> {
    let params = JSON.stringify(datoActualizado)
    let options = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    }

    return this._http.put(this.apiURL+'/Acrualizar/'+id,params,options).pipe((res)=>res);

  }

  Eliminar(id):Observable<any>{
    let options = {
      headers:new HttpHeaders ({'Content-type':'application/json'})
    }

    return this._http.delete(this.apiURL+'/Borrar/'+id,options).pipe((res)=>res)

  }

}

