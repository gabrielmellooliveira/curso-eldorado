import { Component, OnInit } from '@angular/core';
import Repository from 'src/app/models/Repository';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass']
})
export class ListaComponent implements OnInit {
  repositories: Repository[] = [];

  mostrarLista:boolean = false;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.buscarRepositorios().subscribe(repos => {
      this.repositories = repos
    })
  }

  clicar(): void {
    this.mostrarLista = !this.mostrarLista;
  }
}
