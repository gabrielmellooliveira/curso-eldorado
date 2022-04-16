import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass']
})
export class FormularioComponent implements OnInit {
  login:string = '';
  senha:string = '';

  constructor() { }

  ngOnInit(): void {}

  logar(): void {
    console.log(`Login: ${this.login} - Senha: ${this.senha}`)
  }
}
