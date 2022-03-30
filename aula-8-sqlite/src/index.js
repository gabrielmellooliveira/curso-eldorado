const Carro = require('./models/Carro')
const CarroRepository = require('./repositories/CarroRepository')

function main() {
  let repositorio = new CarroRepository()

  let carro = new Carro('Cruze LT', 'Chevrolet', 2020, 'Cinza')

  repositorio.salvarCarro(carro)

  console.log('Carros: ', repositorio.listarCarros())
}

main()
