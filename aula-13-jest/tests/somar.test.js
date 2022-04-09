const somar = require('../src/somar')

describe('Soma de dois números', () => {
  it('Somar 1 + 1 e retornar 2', () => {
    const resultado = somar(1, 1)

    expect(resultado).toEqual(2)
  })

  it('Somar 1 + "1" e retornar 2', () => {
    const resultado = somar(1, '1')

    expect(resultado).toEqual(2)
  })
})