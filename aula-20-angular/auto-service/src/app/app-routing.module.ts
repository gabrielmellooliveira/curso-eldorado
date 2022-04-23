import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './componentes/companies/companies.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { LoginComponent } from './componentes/login/login.component';
import { SemRespostaComponent } from './componentes/sem-resposta/sem-resposta.component';

const routes: Routes = [
  { path: '', component: ListaComponent },
  { path: 'form', component: FormularioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: '**', component: SemRespostaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
