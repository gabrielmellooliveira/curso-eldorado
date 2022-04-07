const express = require('express')

const CarrosRoutes = require('./routes/CarrosRoutes')

// Iniciar express
const app = express()

// Configurar JSON para express
app.use(express.json())

// Configurar rotas
app.use('/carros', CarrosRoutes)

// Iniciar servidor
app.listen(3333, () => {
  console.log('Servidor rodando em http://localhost:3333')
})