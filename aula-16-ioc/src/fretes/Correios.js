class Correios {
  calcularFrete(valor) {
    const valorFrete = valor * 0.09
    console.log('Correios: R$' + valorFrete)
  }
}

module.exports = Correios