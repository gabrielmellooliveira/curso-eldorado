const CarModel = require('../database/models/CarModel')
const CompanyModel = require('../database/models/CompanyModel')

class CarRepository {
  async add(car) {
    try {
      return await CarModel.create(car)
    } catch (error) {
      console.log('Erro ao salvar um carro -', error.message)
    }
  }

  async selectAll() {
    try {
      return await CarModel.findAll({ include: [ { model: CompanyModel } ] })
    } catch (error) {
      console.log('Erro ao selecionar vários carros -', error.message)
    }
  }

  async selectByFilter(filter) {
    try {
      return await CarModel.findAll({
        where: filter
      })
    } catch (error) {
      console.log('Erro ao selecionar por filtro vários carros -', error.message)
    }
  }

  async update(car) {
    try {
      return await CarModel.update(car, { 
        where: {
          id: car.id
        }
      })
    } catch (error) {
      console.log('Erro ao editar um carro -', error.message)
    }
  }

  async remove(id) {
    try {
      return await CarModel.destroy({
        where: {
          id
        }
      })
    } catch (error) {
      console.log('Erro ao remover um carro -', error.message)
    }
  }
}

module.exports = CarRepository