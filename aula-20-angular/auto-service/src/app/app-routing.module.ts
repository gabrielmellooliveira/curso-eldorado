import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  { path: '', component: ListaComponent },
  { path: 'form', component: FormularioComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
