import { Component } from '@angular/core';
import {Routes,RouterModule} from '@angular/router'; // modulo de rutas de Angular 
import {CrearComponent} from './components/crear/crear.component';
import {ListarComponent} from './components/listar/listar.component';
import {ActualizarComponent} from './components/actualizar/actualizar.component';
import {InicioComponent} from './components/inicio/inicio.component';
import{LoginComponent} from './components/login/login.component';
import {AuthGuard} from './guards/auth.guard';



const appRouter: Routes =[
    {path:'',component:InicioComponent}, //ruta del fornt para llegar a ese componente
    {path:'crear',component:CrearComponent},
    {path:'listar',component:ListarComponent ,canActivate:[AuthGuard]}   , //,canActivate:[AuthGuard]
    {path:'actualizar',component:ActualizarComponent, canActivate:[AuthGuard]},
    {path:'login',component:LoginComponent}
    
    
];

export const routing = RouterModule.forRoot(appRouter) //Elementos que se exportan para trabajar desde todo el poryecto