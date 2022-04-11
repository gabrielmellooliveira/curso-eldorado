class TransportadoraAzul {
  calcularFrete(valor) {
    const valorFrete = valor * 0.05
    console.log('TransportadoraAzul: R$' + valorFrete)
  }
}

module.exports = TransportadoraAzul