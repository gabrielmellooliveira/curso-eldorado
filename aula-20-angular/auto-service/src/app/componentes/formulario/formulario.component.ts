import { Component, OnInit } from '@angular/core';
import { EldoradoService } from 'src/app/services/eldorado.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass']
})
export class FormularioComponent implements OnInit {
  login:string = '';
  senha:string = '';

  constructor(private eldoradoService: EldoradoService) { }

  ngOnInit(): void {
    this.listarCarros()
  }

  logar(): void {
    this.eldoradoService.autenticar(this.login, this.senha).subscribe(response => {
      const token = response.content.token
      localStorage.setItem('token', token)
    })
  }

  listarCarros(): void {
    this.eldoradoService.listarCarros().subscribe(response => {
      console.log('response', response)
    })
  }
}
