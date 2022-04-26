import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.sass']
})
export class TextoComponent implements OnInit, OnChanges, OnDestroy {
  @Input() texto: string = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ALTERANDO')
    console.log(changes)
  }

  ngOnDestroy(): void {
    console.log('DESTRUINDO')
  }

  ngOnInit(): void {
    console.log('INICIANDO')
  }
}
