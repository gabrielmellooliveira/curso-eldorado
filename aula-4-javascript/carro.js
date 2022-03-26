class Carro {
  constructor (modelo, marca, ano, cor, motor) {
    this._modelo = modelo
    this._marca = marca
    this._ano = ano
    this._cor = (cor !== '' && cor !== null && cor !== undefined) ? cor : 'Indefinida'
    this._motor = motor instanceof Motor ? motor : null
  }

  setMotor(motor) {
    if (motor instanceof Motor) {
      this._motor = motor
    }
  }




  verificarSeCarroDoAno() {
    return this._ano === new Date().getFullYear()
  }

  getModelo() {
    return this._modelo
  }

  getAno() {
    return this._ano
  }

  getCor() {
    return this._cor
  }

  setCor(cor) {
    this._cor = (cor !== '' && cor !== null && cor !== undefined) ? cor : 'Indefinida'
  }
}