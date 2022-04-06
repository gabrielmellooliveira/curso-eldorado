const express = require('express')

// Iniciar express
const app = express()

// Configurar JSON para express
app.use(express.json())

// http://localhost:3333/buscarCarros

const carros = [
  { id: 1, modelo: 'Versa', ano: 2020 },
  { id: 2, modelo: 'Honda Civic', ano: 2021 },
  { id: 3, modelo: 'Cruze', ano: 2018 },
  { id: 4, modelo: 'Kicks', ano: 2019 },
] 

// Criar um endpoint
app.get('/buscarCarros', (request, response) => {
  return response.json({ carros })
})

// Criar um endpoint com parametro
app.get('/buscarCarros/:id', (request, response) => {
  const id = request.params.id

  return response.json({ 
    carros: carros.filter(carro => carro.id === parseInt(id)) 
  })
})

// Iniciar servidor
app.listen(3333, () => {
  console.log('Servidor rodando em http://localhost:3333')
})