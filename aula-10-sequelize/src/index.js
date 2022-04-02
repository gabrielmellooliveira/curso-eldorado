const Carro = require('./carro')
const Usuario = require('./usuario')

const database = require('./database')

async function main() {
  //await database.sync()

  // Inserir um novo carro
  const carro = await Carro.create({
    modelo: 'Tracker',
    carro_marca: 'Chevrolet',
    carro_ano: 2019,
    carro_cor: 'Branco'
  })

  console.log(carro)

  // Selecionar os carros
  // const carros = await Carro.findAll({
  //   where: {
  //     carro_ano: 2021
  //   }
  // })
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