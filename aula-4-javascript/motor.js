class Motor {
  constructor(potencia, consumo, combustivel) {
    this._potencia = potencia
    this._consumo = consumo
    this._combustivel = combustivel
  }

  getCombustivel() {
    return this._combustivel
  }

  setCombustivel(combustivel) {
    if (combustivel === 'etanol' || combustivel === 'gasolina') {
      this._combustivel = combustivel
    }
  }
}
