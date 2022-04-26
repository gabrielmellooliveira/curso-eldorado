import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/guards/auth-guard.service';
import { EldoradoService } from 'src/app/services/eldorado.service';

import { FormControl, FormGroup, FormBuilder, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass']
})
export class FormularioComponent implements OnInit {
  login: FormControl = new FormControl('', Validators.required);
  senha: FormControl = new FormControl('', Validators.required);

  mostrar: boolean = false;

  constructor(private eldoradoService: EldoradoService, private authGuard: AuthGuardService) { }

  ngOnInit(): void {
    // this.listarCarros()
  }

  mostrarTexto(): void {
    this.mostrar = !this.mostrar;
  }

  logar(): void {
    if (this.login.status === 'VALID' && this.senha.status === 'VALID') {
      this.eldoradoService.autenticar(this.login.value, this.senha.value).subscribe(response => {
        const token = response.content.token

        if (token) {
          this.authGuard.setAuth(true)
          localStorage.setItem('token', token)
        }
      })
    }
  }

  listarCarros(): void {
    this.eldoradoService.listarCarros().subscribe(response => {
      console.log('response', response)
    })
  }
}
