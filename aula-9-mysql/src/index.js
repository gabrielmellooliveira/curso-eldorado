const Carro = require('./models/Carro')
const CarroRepository = require('./repositories/CarroRepository')

async function main() {
  //let carro = new Carro('Cruze LTZ', 'Chevrolet', 2020, 'Branco', 5)

  let repositorio = new CarroRepository()

  // Listar carros
  const carros = await repositorio.listarCarros()

  // Adicionar um carro
  await repositorio.salvarCarro(carro)

  // Remove um carro
  await repositorio.removerCarro(4)

  // Editar um carro
  await repositorio.editarCarro(carro)

  // Filtrar carros
  // repositorio.filtrarCarros({ ano: 2020, cor: 'Branco' }, carros => {
  //   console.log(carros)
  // })

  // repositorio.filtrarCarros({ ano: 2020, marca: 'Chevrolet' }, carros => {
  //   console.log(carros)
  // })
}

main()
