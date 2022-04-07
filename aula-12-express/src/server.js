const app = require('./app')

// Iniciar servidor
app.listen(3333, () => {
  console.log('Servidor rodando em http://localhost:3333')
})