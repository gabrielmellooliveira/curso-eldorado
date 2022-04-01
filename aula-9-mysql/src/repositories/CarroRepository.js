const { tratarErro } = require('../utils/logUtils')

const Carro = require('../models/Carro')
const mysql = require('mysql2')

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
    connection.query(criacaoTabelaSql, err => { tratarErro(err) })
  }

  constructor() {
    this._bancoDeDados = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'testeMySql2',
      port: 3306
    })

    this._criarTabela()

    this._bancoDeDados.config.namedPlaceholders = true
  }

  salvarCarro(carro, callback = () => {}) {
    if (carro instanceof Carro) {
      const criacaoDadosSql = `
        INSERT INTO carros (carro_modelo, carro_marca, carro_ano, carro_cor) 
        VALUES (:modelo, :marca, :ano, :cor)
      `

      const carroParametros = {
        modelo: carro.getModelo(), 
        marca: carro.getMarca(), 
        ano: carro.getAno(), 
        cor: carro.getCor()
      }

      let callbackMySql = (err, result) => {
        tratarErro(err)
        callback(result)
      }

      this._bancoDeDados.query(criacaoDadosSql, carroParametros, callbackMySql)
    }
  }

  listarCarros(callback = () => {}) {
    const selecaoDadosSql = 'SELECT * FROM carros'

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

    this._bancoDeDados.query(selecaoDadosSql, callbackMySql)
  }

  filtrarCarros(filtro, callback = () => {}) {
    const selecaoDadosSql = 'SELECT * FROM carros'

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

    this._bancoDeDados.query(selecaoDadosSql, callbackMySql)
  }

  editarCarro(carro, callback = () => {}) {
    const atualizacaoDadosSql = `
      UPDATE carros SET
        carro_modelo = :modelo, 
        carro_marca = :marca, 
        carro_ano = :ano, 
        carro_cor = :cor
      WHERE carro_id = :id
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
      callback(result)
    }

    this._bancoDeDados.query(atualizacaoDadosSql, carroParametros, callbackMySql)
  }

  removerCarro(idCarro, callback = () => {}) {
    const remocaoDadosSql = 'DELETE FROM carros WHERE carro_id = :idCarro'

    let callbackMySql = (err, result) => {
      tratarErro(err)
      callback(result)
    }

    this._bancoDeDados.query(remocaoDadosSql, { idCarro }, callbackMySql)
  }
}

module.exports = CarroRepository