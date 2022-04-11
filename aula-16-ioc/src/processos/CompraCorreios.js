class CompraCorreios {
  constructor(freteCorreios) {
    this.freteCorreios = freteCorreios
  }

  comprar() {
    // Varios processos
    this.freteCorreios.calcularFrete(100)
  }
}

module.exports = CompraCorreios