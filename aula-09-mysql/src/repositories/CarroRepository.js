const { tratarErro } = require('../utils/logUtils')

const Carro = require('../models/Carro')
const conexao = require('../config/mysql')

class CarroRepository {
  _criarTabela() {
    const criacaoTabelaSql = `
      CREATE TABLE IF NOT EXISTS carros (
        carro_id INT AUTO_INCREMENT PRIMARY KEY,
        carro_modelo VARCHAR(100),
        carro_marca VARCHAR(100),
        carro_ano INT,
        carro_cor VARCHAR(100)
      )
    `
    this._bancoDeDados.query(criacaoTabelaSql, err => { tratarErro(err) })
  }

  async salvarCarro(carro) {
    let connection

    try {
      if (carro instanceof Carro) {
        const sql = 'INSERT INTO carros (carro_modelo, carro_marca, carro_ano, carro_cor) VALUES (:modelo, :marca, :ano, :cor)'

        const parametros = {
          modelo: carro.getModelo(), 
          marca: carro.getMarca(), 
          ano: carro.getAno(), 
          cor: carro.getCor()
        }

        connection = await conexao()
        await connection.query(sql, parametros)
      }
    } catch(error) {
      console.log('Erro ao salvar um carro', error.message)
    } finally {
      connection.end()
    }
  }

  async listarCarros() {
    let connection

    try {
      const sql = 'SELECT * FROM carros'

      connection = await conexao()
      const [result] = await connection.query(sql)

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

      return [...carrosFormatados]
    } catch (error) {
      console.log('Erro ao listar carros', error.message)
    } finally {
      connection.end()
    }
  }

  async filtrarCarros(filtro) {
    const { modelo, marca, ano, cor } = filtro

    const filtros = []
    const filtrosValores = []

    if (modelo) {
      filtros.push('carro_modelo = ?')
      filtrosValores.push(modelo)
    }

    if (marca) {
      filtros.push('carro_marca = ?')
      filtrosValores.push(marca)
    }

    if (ano) {
      filtros.push('carro_ano = ?')
      filtrosValores.push(ano)
    }

    if (cor) {
      filtros.push('carro_cor = ?')
      filtrosValores.push(cor)
    }

    let connection

    try {
      let filtroSql = 'SELECT * FROM carros'

      if (filtros.length > 0) {
        filtroSql += ' WHERE ' + filtros.join(' AND ')
      }

      connection = await conexao()
      const result = await connection.query(filtroSql, filtrosValores)

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

      return [...carrosFormatados]
    } catch (error) {
      console.log('Erro ao filtrar os carros', error.message)
    } finally {
      connection.end()
    }
  }

  async editarCarro(carro) {
    let connection

    try {
      const sql = `
        UPDATE carros SET
          carro_modelo = :modelo, 
          carro_marca = :marca, 
          carro_ano = :ano, 
          carro_cor = :cor
        WHERE carro_id = :id
      `

      const parametros = {
        modelo: carro.getModelo(), 
        marca: carro.getMarca(), 
        ano: carro.getAno(), 
        cor: carro.getCor(),
        id: carro.getId()
      }
  
      connection = await conexao()
      await connection.query(sql, parametros)
    } catch (error) {
      console.log('Erro ao editar carro', error.message)
    } finally {
      connection.end()
    }
  }

  async removerCarro(idCarro) {
    let connection

    try {
      const sql = 'DELETE FROM carros WHERE carro_id = :idCarro'

      connection = await conexao()
      await connection.query(sql, { idCarro })
    } catch (error) {
      console.log('Erro ao remover carro', error.message)
    } finally {
      connection.end()
    }
  }
}

module.exports = CarroRepository