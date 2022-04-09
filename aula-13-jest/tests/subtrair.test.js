const subtrair = require('../src/subtrair')

describe('Subtração de dois números', () => {
  it('Subtrair 1 + 1 e retornar 0', () => {
    const resultado = subtrair(1, 1)

    expect(resultado).toEqual(0)
  })

  it('Subtrair 1 + "1" e retornar 0', () => {
    const resultado = subtrair(1, '1')

    expect(resultado).toEqual(0)
  })
})