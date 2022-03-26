class CarroRepositorio {
  constructor() {
    this._carros = []
    this._chaveCarro = 'carros'

    if (localStorage.getItem(this._chaveCarro) === null) {
      localStorage.setItem(this._chaveCarro, JSON.stringify(this._carros))
    }
  }

  _formatarCarros() {
    let carrosJson = localStorage.getItem(this._chaveCarro)
    let carrosSemClasse = JSON.parse(carrosJson)
    this._carros = carrosSemClasse.map(
      carro => new Carro(carro._modelo, carro._marca, carro._ano, carro._cor)
    )
  }

  salvarCarro(carro) {
    if (carro instanceof Carro) {
      this._formatarCarros()

      this._carros.push(carro)
      localStorage.setItem(this._chaveCarro, JSON.stringify(this._carros))
    }
  }

  listarCarros() {
    this._formatarCarros()

    return [...this._carros]
  }

  filtrarCarrosPorAno(ano) {
    this._formatarCarros()

    this._carros.filter(carro => carro.getAno() === ano)
  }

  removerCarro(modelo) {
    // Busca os carros do localstorage
    this._formatarCarros()

    // Remove o carro dos nossos carros
    this._carros = this._carros.filter(carro => carro.getModelo() !== modelo)

    // Salva os carros no localstorage
    localStorage.setItem(this._chaveCarro, JSON.stringify(this._carros))
  }

  editarCarro(novoCarro) {
    // Busca os carros do localstorage
    this._formatarCarros()

    // Edita o carro dos nossos carros
    // let index = this._carros.findIndex(carro => carro.getModelo() === novoCarro.getModelo())
    // this._carros[index] = novoCarro

    this._carros = this._carros.map(carro => {
      if (carro.getModelo() === novoCarro.getModelo()) {
        return novoCarro
      } else {
        return carro
      }
    })

    // Salva os carros no localstorage
    localStorage.setItem(this._chaveCarro, JSON.stringify(this._carros))
  }
}