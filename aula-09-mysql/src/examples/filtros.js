function filtrarCarros(carro, callback = () => {}) {
  const selecaoDadosSql = `
    SELECT * FROM carros 
    WHERE carro_modelo = :modelo OR carro_marca = :marca OR carro_ano = :ano OR carro_cor = :cor
  `
  const carroParametros = {
    modelo: carro.getModelo(),
    marca: carro.getMarca(),
    ano: carro.getAno(),
    cor: carro.getCor(),
    id: carro.getId()
  }

  let callbackMySql = (err, result) => {
    tratarErro(err)

    let carrosFormatados = []

    if (result.length > 0) {
      carrosFormatados = result.map(carro =>
        new Carro(
          carro.carro_modelo,
          carro.carro_marca,
          carro.carro_ano,
          carro.carro_cor,
          carro.carro_id
        )
      )
    }

    callback([...carrosFormatados])
  }

  this._bancoDeDados.query(selecaoDadosSql, carroParametros, callbackMySql)
}