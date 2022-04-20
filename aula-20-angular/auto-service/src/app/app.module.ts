import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

// import { InputTextModule } from 'primeng/inputtext';
// import { ButtonModule } from 'primeng/button';

import PrimeNgModules from './primeng/primeng.module';
import { LoginComponent } from './componentes/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FormularioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ].concat(PrimeNgModules),
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
