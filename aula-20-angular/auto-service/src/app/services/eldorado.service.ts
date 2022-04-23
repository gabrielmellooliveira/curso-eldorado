import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Auth from '../models/Auth';
import IResponse from '../models/IResponse';

@Injectable({
  providedIn: 'root'
})
export class EldoradoService {
  baseUrl: string = 'http://localhost:3333';

  constructor(private httpClient: HttpClient) { }

  private getHeaders() {
    const token = localStorage.getItem('token')

    return {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  }

  autenticar(username: string, password: string): Observable<IResponse<Auth>> {
    return this.httpClient.post<IResponse<Auth>>(`${this.baseUrl}/login`, { username, password });
  }

  listarCarros(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/car`, this.getHeaders())
  }
}
