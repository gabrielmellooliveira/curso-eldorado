const express = require('express')

const app = express()

app.use(express.json())

app.get('/usuarios', (request, response) => {
  return response.status(200).json({ mensagem: 'OK' })
})

app.post('/usuarios', (request, response) => {
  const usuario = {
    nome: request.body.nome, 
    login: request.body.login
  }

  return response.status(201).json({ usuario })
})

module.exports = app