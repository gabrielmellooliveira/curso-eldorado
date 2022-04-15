const express = require('express')

const CarController = require('../controllers/CarController')
const carRouters = require('../../../interfaces/api/routers/CarRouters')

const router = express.Router()

for (const carRoute of carRouters.routes) {
  router[carRoute.method](carRoute.name, carRoute.route(CarController))
}

module.exports = { name: carRouters.name, router }