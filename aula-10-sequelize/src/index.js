const MarcaRepository = require('./repositories/MarcaRepository')

const Carro = require('./database/models/Carro')
const Marca = require('./database/models/Marca')

async function main() {
  const marcaRepository = new MarcaRepository()

  const marcas = await Marca.findAll({ include: [ { model: Carro } ] })

  console.log(marcas[0].dataValues)

  // await marcaRepository.salvar({ nome: 'Chevrolet' })

  // Inserir um novo carro
  // const carro = await Carro.create({
  //   modelo: 'Tracker',
  //   marca_id: 1,
  //   ano: 2019,
  //   cor: 'Branco'
  // })

  // console.log(carro)

  // Selecionar os carros
  // const carros = await Carro.findAll({ include: [ { model: Marca } ] })

  // console.log(carros[0].dataValues)

  // const result = await Carro.findByPk(2)

  // Editar um carro
  // const carro = carros[0]
  // carro.carro_modelo = 'Onix'
  // await carro.save()

  // Remover um carro
  // await carro.destroy()
  // await Carro.destroy({
  //   where: {
  //     carro_ano: 2020
  //   }
  // })
}

main()