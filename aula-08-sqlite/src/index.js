const Carro = require('./models/Carro')
const CarroRepository = require('./repositories/CarroRepository')

function main() {
  let repositorio = new CarroRepository()

  let carro = new Carro('Cruze LT', 'Chevrolet', 2021, 'Cinza')
  let carro2 = new Carro('Cruze LTZ', 'Chevrolet', 2020, 'Branco')
  let carro3 = new Carro('Cruze Premier', 'Chevrolet', 2021, 'Preto')

  // Adicionar um carro
  repositorio.salvarCarro(carro)
  repositorio.salvarCarro(carro2)
  repositorio.salvarCarro(carro3)

  // Listar carros
  repositorio.listarCarros(function(carros) {
    for (const carro of carros) {
      // Remove um carro
      repositorio.removerCarro(carro.getId())

      // Editar um carro
      carro.setModelo('SEM MODELO')
      repositorio.editarCarro(carro)
    }
  })

  // Filtrar carros por ano
  repositorio.filtrarCarrosPorAno(2020, carros => {
    console.log(carros)
  })
}

main()
