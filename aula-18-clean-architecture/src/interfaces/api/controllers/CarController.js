const createCar = require("../../../application/useCases/car/createCar")

class CarController {
  constructor(carRepository) {
    this.carRepository = carRepository
  }

  post = async (request, response) => {
    const dependencies = { carRepository: this.carRepository }

    try {
      const { body: car } = request
      const carCreated = await createCar(car, dependencies)

      return response.status(201).json({ ...carCreated })
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }
}

module.exports = CarController