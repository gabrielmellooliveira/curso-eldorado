import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

// import { InputTextModule } from 'primeng/inputtext';
// import { ButtonModule } from 'primeng/button';

import PrimeNgModules from './primeng/primeng.module';
import { LoginComponent } from './componentes/login/login.component';
import { SemRespostaComponent } from './componentes/sem-resposta/sem-resposta.component';
import { CompaniesComponent } from './componentes/companies/companies.component'

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FormularioComponent,
    LoginComponent,
    SemRespostaComponent,
    CompaniesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ].concat(PrimeNgModules),
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
