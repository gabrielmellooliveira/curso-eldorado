function filtrarCarros(carros, ano = null) {
  let anoValido = validaAno(ano)

  return carros.filter(carro => carro.getAno() === anoValido)
}

const criarItemCarro = (carro) => {
  return carro.getModelo() + ' (' + carro.getAno() + ')'
}

// const criarItemCarro = carro => carro.getModelo() + ' (' + carro.getAno() + ')'

function listarCarros(carros = []) {
  console.log(carros.map(carro => criarItemCarro(carro)))
}
