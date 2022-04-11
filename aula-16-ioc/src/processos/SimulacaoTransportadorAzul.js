const TransportadoraAzul = require("../fretes/TransportadoraAzul")

class SimulacaoTransportadoraAzul {
  constructor() {
    this.frete = new TransportadoraAzul()
  }

  simular() {
    // Varios processos
    this.frete.calcularFrete(200)
  }
}

module.exports = SimulacaoTransportadoraAzul