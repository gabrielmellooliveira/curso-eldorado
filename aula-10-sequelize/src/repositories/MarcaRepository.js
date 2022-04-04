const Marca = require('../database/models/Marca')

class MarcaRepository {
  async salvar(marca) {
    try {
      return await Marca.create(marca)
    } catch (error) {
      console.log('Erro ao salvar uma marca -', error.message)
    }
  }

  async selecinarTodos() {
    try {
      return await Marca.findAll()
    } catch (error) {
      console.log('Erro ao selecionar várias marcas -', error.message)
    }
  }

  async selecinarPorFiltro(filtro) {
    try {
      return await Marca.findAll({
        where: filtro
      })
    } catch (error) {
      console.log('Erro ao selecionar por filtro várias marcas -', error.message)
    }
  }

  async editar(marca) {
    try {
      return await marca.save()
    } catch (error) {
      console.log('Erro ao editar uma marca -', error.message)
    }
  }

  async remover(id) {
    try {
      return await Marca.destroy({
        where: {
          id
        }
      })
    } catch (error) {
      console.log('Erro ao remover uma marca -', error.message)
    }
  }
}

module.exports = MarcaRepository