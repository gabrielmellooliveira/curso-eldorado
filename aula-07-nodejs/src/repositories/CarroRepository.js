const Carro = require('../models/Carro')

class CarroRepository {
  constructor() {
    this._carros = []
  }

  salvarCarro(carro) {
    if (carro instanceof Carro) {
      this._carros.push(carro)
    }
  }

  listarCarros() {
    return [...this._carros]
  }

  filtrarCarrosPorAno(ano) {
    this._carros.filter(carro => carro.getAno() === ano)
  }

  removerCarro(modelo) {
    this._carros = this._carros.filter(carro => carro.getModelo() !== modelo)
  }

  editarCarro(novoCarro) {
    this._carros = this._carros.map(carro => {
      if (carro.getModelo() === novoCarro.getModelo()) {
        return novoCarro
      } else {
        return carro
      }
    })
  }
}

module.exports = CarroRepository