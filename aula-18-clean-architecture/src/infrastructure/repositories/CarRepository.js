const ICarRepository = require("../../interfaces/repositories/ICarRepository");

class CarRepository extends ICarRepository {
  async create({ model, companyId, year, color }) {
    console.log('Cadastro do carro realizado com sucesso')
  }
}

module.exports = CarRepository