const CompanyModel = require('../database/models/CompanyModel')

class CompanyRepository {
  async add(company) {
    try {
      return await CompanyModel.create(company)
    } catch (error) {
      console.log('Erro ao salvar uma marca -', error.message)
    }
  }

  async selectAll() {
    try {
      return await CompanyModel.findAll()
    } catch (error) {
      console.log('Erro ao selecionar várias marcas -', error.message)
    }
  }

  async selectByFilter(filter) {
    try {
      return await CompanyModel.findAll({
        where: filter
      })
    } catch (error) {
      console.log('Erro ao selecionar por filtro várias marcas -', error.message)
    }
  }

  async update(company) {
    try {
      return await company.save()
    } catch (error) {
      console.log('Erro ao editar uma marca -', error.message)
    }
  }

  async remove(id) {
    try {
      return await CompanyModel.destroy({
        where: {
          id
        }
      })
    } catch (error) {
      console.log('Erro ao remover uma marca -', error.message)
    }
  }
}

module.exports = CompanyRepository