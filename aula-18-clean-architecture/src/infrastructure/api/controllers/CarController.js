const CarController = require('../../../interfaces/api/controllers/CarController')
const CarRepository = require('../../repositories/CarRepository')

module.exports = new CarController(new CarRepository())