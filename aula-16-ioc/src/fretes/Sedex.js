class Sedex {
  calcularFrete(valor) {
    const valorFrete = valor * 0.12
    console.log('Sedex: R$' + valorFrete)
  }
}

module.exports = Sedex