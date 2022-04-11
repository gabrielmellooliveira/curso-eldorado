const Correios = require("../fretes/Correios")
const Sedex = require("../fretes/Sedex")
const TransportadoraAzul = require("../fretes/TransportadoraAzul")

class CompraFinal {
  constructor() {
    this.freteCorreio = new Correios()
    this.freteSedex = new Sedex()
    this.freteTransportadoraAzul = new TransportadoraAzul()
  }

  comprarESimular() {
    // Varios processos
    this.freteCorreio.calcularFrete(100)
    this.freteSedex.calcularFrete(100)
    this.freteTransportadoraAzul.calcularFrete(100)
  }
}

module.exports = CompraFinal