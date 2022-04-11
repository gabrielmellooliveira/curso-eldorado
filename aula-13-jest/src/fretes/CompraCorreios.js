class CompraCorreios {
  constructor(freteCorreios) {
    this.freteCorreios = freteCorreios
  }

  comprar(valor) {
    // Varios processos
    return this.freteCorreios.calcularFrete(valor)
  }
}

module.exports = CompraCorreios