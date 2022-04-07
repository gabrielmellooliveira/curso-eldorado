const CarrosRoutes = require('./routes/CarrosRoutes')

exports.registerRoutes = (app) => {
  app.use('/carros', CarrosRoutes)
}