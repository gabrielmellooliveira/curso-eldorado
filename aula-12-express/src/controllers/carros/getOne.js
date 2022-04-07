exports.getOne = (request, response) => {
  try {
    const id = request.params.id

    const carrosFiltrados = carros.filter(carro => carro.id === parseInt(id))

    return response.status(200).json({ carros: carrosFiltrados })
  } catch (error) {
    return response.status(400).json({ mensagem: error.message })
  }
}