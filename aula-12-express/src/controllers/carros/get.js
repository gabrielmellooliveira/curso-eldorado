exports.get = (request, response) => {
  try {
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

    return response.status(200).json({ carros: carrosFiltrados })
  } catch (error) {
    return response.status(400).json({ mensagem: error.message })
  }
}