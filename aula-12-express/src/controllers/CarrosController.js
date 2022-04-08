const ResponseBuilder = require('../utils/ResponseBuilder')

let carros = [
  { id: 1, modelo: 'Versa', ano: 2020 },
  { id: 2, modelo: 'Honda Civic', ano: 2021 },
  { id: 3, modelo: 'Cruze', ano: 2018 },
  { id: 4, modelo: 'Kicks', ano: 2019 },
]

class CarrosController {
  get(request, response) {
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
  
      const responseContent = ResponseBuilder.createResponseContent(carrosFiltrados)

      return response.status(200).json(responseContent)
    } catch (error) {
      const responseErrors = ResponseBuilder.createResponseErrors([ error.message ])

      return response.status(400).json(responseErrors)
    }
  }
  
  getOne(request, response) {
    try {
      const id = request.params.id
  
      const carrosFiltrados = carros.filter(carro => carro.id === parseInt(id))
  
      return response.status(200).json({ carros: carrosFiltrados })
    } catch (error) {
      return response.status(400).json({ mensagem: error.message })
    }
  }
  
  post(request, response) {
    try {
      const carro = request.body
  
      carro.id = carros.length + 1
  
      carros.push(carro)
  
      return response.status(201).json({ mensagem: 'Carro cadastrado com sucesso!' })
    } catch (error) {
      return response.status(400).json({ mensagem: error.message })
    }
  }
  
  put(request, response) {
    try {
      const carroId = request.params.id
      const novoCarro = request.body
  
      carros = carros.map(carro => {
        if (carro.id === parseInt(carroId)) {
          return Object.assign(carro, novoCarro)
        } else {
          return carro
        }
      })
  
      return response.status(200).json({ mensagem: 'Carro atualizado com sucesso!' })
    } catch (error) {
      return response.status(400).json({ mensagem: error.message })
    }
  }
  
  delete(request, response) {
    try {
      const carroId = request.params.id
  
      carros = carros.filter(carro => carro.id !== parseInt(carroId))
  
      return response.status(200).json({ mensagem: 'Carro deletado com sucesso!' })
    } catch (error) {
      return response.status(400).json({ mensagem: error.message })
    }
  }
}

module.exports = new CarrosController()