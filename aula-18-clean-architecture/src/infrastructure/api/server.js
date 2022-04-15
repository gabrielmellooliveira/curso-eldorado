const app = require('./app')

function start() {
  app.listen(3333, () => {
    console.log('Servidor iniciado')
  })
}

module.exports = { start }