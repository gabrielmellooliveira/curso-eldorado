import { HttpClient, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable } from 'rxjs';
import Company from '../models/Company';
import IResponse from '../models/IResponse';
import Response from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  baseUrl: string = 'http://localhost:3333';

  constructor(private httpClient: HttpClient, private router: Router) { }

  private getOptions() {
    const token = localStorage.getItem('token')

    return {
      headers: { 'Authorization': `Bearer ${token}` },
      // observe: 'response',
      // responseType: 'json'
    }
  }

  listCompanies(): Observable<IResponse<Company[]>> {
    const token = localStorage.getItem('token')

    return this.httpClient.get<IResponse<Company[]>>(`${this.baseUrl}/companies`, {
      headers: { 'Authorization': `Bearer ${token}` },
      observe: 'response',
      responseType: 'json'
    })
      .pipe(
        map((response) => response.body || new Response<Company[]>()),
        catchError((err) => {
          if (err.status === 401) {
            this.router.navigate(['/form'])
          }

          throw new Error('Não autorizado')
        })
      )
  }

  createCompany(company: Company): Observable<IResponse<any>> {
    return this.httpClient.post<IResponse<any>>(`${this.baseUrl}/companies`, company, this.getOptions())
  }

  deleteCompany(companyId: number): Observable<IResponse<any>> {
    return this.httpClient.delete<IResponse<any>>(`${this.baseUrl}/companies/${companyId}`, this.getOptions())
  }

  updateCompany(company: Company): Observable<IResponse<any>> {
    return this.httpClient.put<IResponse<any>>(`${this.baseUrl}/companies/${company.id}`, company, this.getOptions())
  }
}
