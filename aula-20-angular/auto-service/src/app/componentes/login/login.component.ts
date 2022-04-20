import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  login: string = '';
  senha: string = '';

  constructor() { }

  ngOnInit(): void { }

  clicar(): void {
    alert('Logar com sucesso!')
  }
}
