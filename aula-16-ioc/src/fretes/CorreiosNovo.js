class Correios {
  calcularFrete(valor) {
    const valorFrete = valor * 0.11
    console.log('Correios Novo: R$' + valorFrete)
  }
}

module.exports = Correios