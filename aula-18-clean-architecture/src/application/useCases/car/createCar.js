const Car = require("../../../domain/Car")

const createCar = async ({ model, companyId, year, color }, { carRepository }) => {
  const newCar = new Car(model, companyId, year, color)
  return await carRepository.create(newCar)
}

module.exports = createCar