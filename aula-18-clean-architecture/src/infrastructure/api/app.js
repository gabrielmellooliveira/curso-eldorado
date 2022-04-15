const express = require('express')
const CarRouter = require('./routers/CarRouter')

const app = express()

app.use(express.json())

app.use(`/${CarRouter.name}`, CarRouter.router)

module.exports = app