import { HttpClient, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import Company from '../models/Company';
import IResponse from '../models/IResponse';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  baseUrl: string = 'http://localhost:3333';

  constructor(private httpClient: HttpClient) { }

  private getOptions() {
    const token = localStorage.getItem('token')

    return {
      headers: { 'Authorization': `Bearer ${token}` },
      observe: 'response'
    }
  }

  listCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.baseUrl}/companies`, this.getOptions())
      .pipe(
        map((response: HttpResponse<Company[]>) => {
          console.log(response.body)

          return response.body || []
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
