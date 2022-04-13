const express = require('express')
const jwt = require('jsonwebtoken')

const autenticar = require('./middlewares/autenticar')
const autenticacao = require('./configs/autenticacao')

const userDefault = require('./configs/userDefault')

const app = express()

app.use(express.json())

const bcrypt = require('bcryptjs')

app.post('/login', (request, response) => {
  const { login, senha } = request.body

  // Criptografar
  // const hash = bcrypt.hash(senha)

  // Comparar criptografia
  const senhaValida = bcrypt.compareSync(senha, userDefault.senhaCriptografada)

  if (login === userDefault.login && senhaValida) {
    const token = jwt.sign({ login, data: Date.now().toString() }, autenticacao.secreteKey, autenticacao.options)

    return response.status(200).json({ usuario: { login }, token })
  }

  return response.status(400).json({ mensagem: 'Login e/ou senha incorretos' })
})

app.use(autenticar)

app.get('/carros', (request, response) => {
  console.log('Acessou o endpoint /carros')

  return response.json({ carros: [ 'Cruze', 'Corolla' ] })
})

app.get('/motos', (request, response) => {
  console.log('Acessou o endpoint /motos')
  return response.json({ motos: [ 'Honda' ] })
})

module.exports = app