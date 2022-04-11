const CompraCorreios = require('../src/fretes/CompraCorreios')

describe('CompraCorreios', () => {
  it('Calcular frete de 100', () => {
    const correiosFake = {
      calcularFrete: (valor) => {
        return valor * 0.09
      }
    }    

    const compraCorreios = new CompraCorreios(correiosFake)

    const resultado = compraCorreios.comprar(100)

    expect(resultado).toEqual(9)
  })
})