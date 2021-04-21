import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../../services/cliente.service'
import {UserI} from '../../models/user'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string;
  clave: string;

  constructor(private clienteService:ClienteService,private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(form):void{
    //console.log('Login',form.value)

    this.clienteService.login(form.value).subscribe((res:any)=>{
      if(res.dataUser.accesstoken != null){
        this.router.navigateByUrl('/listar')
      }else{
        alert('Algo salio Mal')
      }      
    },(error)=>{
      alert('Algo salio Mal.')
    }
    
    )

  }

}
 