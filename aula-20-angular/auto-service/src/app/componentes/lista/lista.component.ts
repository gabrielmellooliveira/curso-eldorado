import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass']
})
export class ListaComponent implements OnInit {
  carro1:string = 'Cruze';
  carro2:string = 'Civic';
  carro3:string = 'Sentra';
  carro4:string = 'Corolla';

  mostrarLista:boolean = false;

  constructor() { }

  ngOnInit(): void { }

  clicar(): void {
    this.mostrarLista = !this.mostrarLista;
  }
}
