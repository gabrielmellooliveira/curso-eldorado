import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/guards/auth-guard.service';
import { EldoradoService } from 'src/app/services/eldorado.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass']
})
export class FormularioComponent implements OnInit {
  login:string = '';
  senha:string = '';

  constructor(private eldoradoService: EldoradoService, private authGuard: AuthGuardService) { }

  ngOnInit(): void {
    // this.listarCarros()
  }

  logar(): void {
    this.eldoradoService.autenticar(this.login, this.senha).subscribe(response => {
      const token = response.content.token

      if (token) {
        this.authGuard.setAuth(true)
        localStorage.setItem('token', token)
      }
    })
  }

  listarCarros(): void {
    this.eldoradoService.listarCarros().subscribe(response => {
      console.log('response', response)
    })
  }
}
