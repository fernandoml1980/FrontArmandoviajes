/*conexion entre el front y el back */

import { Injectable } from '@angular/core'; //se encarga de enviar la informacion
import { HttpClient, HttpHeaders } from '@angular/common/http'; // cabeceras 
import { observable, Observable, BehaviorSubject } from 'rxjs'; // vigila las ejecuciones que se realizan

//login
import {UserI } from '../models/user';
import {JwtReponseI} from '../models/jwt-response';
import {tap} from 'rxjs/operators';
import { isNullOrUndefined } from 'util';



@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiURL = 'http://localhost:3000/Clientes'; // conexion con la 
  
  outhSubject =new BehaviorSubject(false);
  private token: string;

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

  
  login(user:UserI):Observable<JwtReponseI>{
    return this._http.post<JwtReponseI>(this.apiURL+'/login/',user).pipe(tap(
      (res:JwtReponseI)=>{
        console.log(res);
        if (res){
          //guarda token
          this.saveToken(res.dataUser.accesstoken,res.dataUser.expiresIn);
        
        }
      }
    ))
    
  }

  logout():void{
    this.token='';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");

  }

  private saveToken (token:string, expiresIn:string):void{
    localStorage.setItem('ACCESS_TOKEN',token)
    localStorage.setItem('EXPIRES_IN',expiresIn)
    this.token=token;
  }

  getToken():string{
    if (!this.token){
      this.token=localStorage.getItem('ACCESS_TOKEN');
    }
    return this.token
  }

  setUser(user){
    let user_string = JSON.stringify(user);
    localStorage.setItem('currentUser',user_string)

  }
  getCurrenUser(){
    let user_string=localStorage.getItem('currentUser');
    if (!isNullOrUndefined (user_string)){
      let user=JSON.parse(user_string)
      return user;
    }else{
      null
    }

  }

}

