const supertest = require('supertest')
const app = require('../src/app')

describe('Endpoints de usuário', () => {
  it('GET - /usuarios', async () => {
    const response = await supertest(app).get('/usuarios')

    expect(response.statusCode).toEqual(200)
    expect(response.body).toHaveProperty('mensagem', 'OK')
  })

  it('POST - /usuarios', async () => {
    const response = await supertest(app).post('/usuarios').send({
      nome: 'Gabriel',
      login: 'gabrielmello'
    })

    expect(response.statusCode).toEqual(201)
    expect(response.body).toHaveProperty('usuario')
    expect(response.body.usuario).toHaveProperty('nome', 'Gabriel')
    expect(response.body.usuario).toHaveProperty('login', 'gabrielmello')
  })
})