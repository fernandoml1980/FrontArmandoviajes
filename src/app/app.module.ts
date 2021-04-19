//configuracion de los modulos que se usan

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing} from './app.routing';//rutas
import {FormsModule} from '@angular/forms';// para trabajar con formulario
import {HttpClientModule} from '@angular/common/http'; // cabeceras

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CrearComponent } from './components/crear/crear.component';
import { ListarComponent } from './components/listar/listar.component';
import { from } from 'rxjs';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrearComponent,
    ListarComponent,
    ActualizarComponent,
    FooterComponent,
    InicioComponent,
    LoginComponent,

  ],
  imports: [ // importar los modulos
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
