class Carro {
  constructor (modelo, marca, ano, cor, id = null) {
    this._id = id
    this._modelo = modelo
    this._marca = marca
    this._ano = ano
    this._cor = (cor !== '' && cor !== null && cor !== undefined) ? cor : 'Indefinida'
  }

  getId() {
    return this._id
  }

  setId(id) {
    this._id = id
  }

  getModelo() {
    return this._modelo
  }

  setModelo(modelo) {
    this._modelo = modelo
  }

  getMarca() {
    return this._marca
  }

  setMarca(marca) {
    this._marca = marca
  }

  getAno() {
    return this._ano
  }

  setAno(ano) {
    this._ano = ano
  }

  getCor() {
    return this._cor
  }

  setCor(cor) {
    this._cor = (cor !== '' && cor !== null && cor !== undefined) ? cor : 'Indefinida'
  }
}

module.exports = Carro