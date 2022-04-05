const CarRepository = require('./repositories/CarRepository')

async function main() {
  const carRepository = new CarRepository()

  const car = {
    model: 'Tracker',
    companyId: 6,
    year: 2020,
    color: 'Branco'
  }

  // Adicionar um carro
  await carRepository.add(car)
  
  // Selecionar os carros com o modelo da marca
  const cars = await carRepository.selectAll()

  console.log(cars[0].dataValues)
}

main()