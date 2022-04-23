import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  login: string = '';
  senha: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void { }

  clicar(): void {
    this.router.navigate([ '/form' ])
  }
}
