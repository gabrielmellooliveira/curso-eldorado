import { Component, OnInit } from '@angular/core';
import Company from 'src/app/models/Company';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.sass']
})
export class CompaniesComponent implements OnInit {
  companyName: string = '';

  editCompanyId: number = 0;
  editCompanyName: string = '';

  companies: Company[] = [];

  constructor(private companiesService: CompaniesService) { }

  ngOnInit(): void {
    this.listCompanies()
  }

  onCreateCompany(): void {
    const company: Company = new Company()

    company.name = this.companyName

    this.companiesService.createCompany(company).subscribe(response => {
      if (response.errors !== null && response.errors.length > 0) {
        console.error('Erro ao criar compania')
      } else {
        this.listCompanies()
      }
    })
  }

  onDeleteCompany(companyId: number): void {
    this.companiesService.deleteCompany(companyId).subscribe(response => {
      if (response.errors !== null && response.errors.length > 0) {
        console.error('Erro ao deletar compania')
      } else {
        this.listCompanies()
      }
    })
  }

  onEditCompany(): void {
    const company: Company = new Company()

    company.id = this.editCompanyId
    company.name = this.editCompanyName

    this.companiesService.updateCompany(company).subscribe(response => {
      if (response.errors !== null && response.errors.length > 0) {
        console.error('Erro ao editar compania')
      } else {
        this.listCompanies()
      }
    })
  }

  listCompanies(): void {
    this.companiesService.listCompanies().subscribe(response => {
      this.companies = response.content
    })
  }
}
