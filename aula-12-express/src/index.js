const express = require('express')

// Iniciar express
const app = express()

// Configurar JSON para express
app.use(express.json())

let carros = [
  { id: 1, modelo: 'Versa', ano: 2020 },
  { id: 2, modelo: 'Honda Civic', ano: 2021 },
  { id: 3, modelo: 'Cruze', ano: 2018 },
  { id: 4, modelo: 'Kicks', ano: 2019 },
] 

// Criar um endpoint
app.get('/carros', (request, response) => {
  const parametros = request.query

  let carrosFiltrados = carros

  if (parametros) {
    carrosFiltrados = carros.filter(carro => {
      if (parametros.modelo && parametros.ano) {
        return carro.modelo === parametros.modelo && carro.ano === parseInt(parametros.ano)
      } else if (parametros.modelo) {
        return carro.modelo === parametros.modelo
      } else if (parametros.ano) {
        return carro.ano === parseInt(parametros.ano)
      } else {
        return carro
      }
    })
  }

  return response.json({ carros: carrosFiltrados })
})

// Criar um endpoint com parametro
app.get('/carros/:id', (request, response) => {
  const id = request.params.id

  return response.json({
    carros: carros.filter(carro => carro.id === parseInt(id)),
  })
})

// Criar um carro
app.post('/carros', (request, response) => {
  const carro = request.body

  carro.id = carros.length + 1

  carros.push(carro)

  return response.json({ mensagem: 'Carro cadastrado com sucesso!' })
})

// Atualizar um carro
app.put('/carros/:id', (request, response) => {
  const carroId = request.params.id
  const novoCarro = request.body

  carros = carros.map(carro => {
    if (carro.id === parseInt(carroId)) {
      return Object.assign(carro, novoCarro)
    } else {
      return carro
    }
  })

  return response.json({ mensagem: 'Carro atualizado com sucesso!' })
})

// Deletar um carro
app.delete('/carros/:id', (request, response) => {
  const carroId = request.params.id

  carros = carros.filter(carro => carro.id !== parseInt(carroId))

  return response.json({ mensagem: 'Carro deletado com sucesso!' })
})

// Iniciar servidor
app.listen(3333, () => {
  console.log('Servidor rodando em http://localhost:3333')
})