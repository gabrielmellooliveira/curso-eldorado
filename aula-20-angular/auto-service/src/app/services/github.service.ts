import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import Repository from '../models/Repository';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient: HttpClient) { }

  buscarRepositorios(): Observable<Repository[]> {
    const url: string = 'https://api.ithub.com/users/gabrielmellooliveira/repos'

    return this.httpClient.get<Repository[]>(url, { observe: 'response' }).pipe(
      map((item) => {
        console.log('item', item)
        return item.body || []
      }),
      catchError((err) => {
        throw new Error(err.message)
      })
    );
  }
}
