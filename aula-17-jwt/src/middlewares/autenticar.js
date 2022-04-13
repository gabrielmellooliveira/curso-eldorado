const jwt = require('jsonwebtoken')
const autenticacao = require('../configs/autenticacao')

function autenticar(request, response, next) {
  const autorizacao = request.headers.authorization

  if (autorizacao === null || autorizacao === undefined) {
    return response.status(400).json({ mensagem: 'Token não informado' })
  }

  const token = autorizacao.split(' ')[1]

  try {
    jwt.verify(token, autenticacao.secreteKey)

    next()
  } catch (error) {
    return response.status(401).json({ mensagem: 'Não autorizado' })
  }
}

module.exports = autenticar