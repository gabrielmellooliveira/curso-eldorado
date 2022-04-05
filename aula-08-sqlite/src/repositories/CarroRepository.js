const { tratarErro } = require('../utils/logUtils')
const { criarPastaSeNaoExistir } = require('../utils/pastaUtils')

const Carro = require('../models/Carro')
const sqlite = require('sqlite3')

const CAMINHO_BANCO_DADOS = 'src/database/database.db'
const CAMINHO_PASTA_BANCO_DADOS = './src/database'

class CarroRepository {
  constructor() {
    criarPastaSeNaoExistir(CAMINHO_PASTA_BANCO_DADOS)

    this._bancoDeDados = new sqlite.Database(CAMINHO_BANCO_DADOS, tratarErro)
  }

  salvarCarro(carro) {
    if (carro instanceof Carro) {
      this._bancoDeDados.run(
        `INSERT INTO carros (carro_modelo, carro_marca, carro_ano, carro_cor) VALUES ($modelo, $marca, $ano, $cor)`, 
        { 
          $modelo: carro.getModelo(),
          $marca: carro.getMarca(),
          $ano: carro.getAno(),
          $cor: carro.getCor()
        }, 
        tratarErro
      )
    }
  }

  listarCarros(callback) {
    this._bancoDeDados.all(
      'SELECT * FROM carros', 
      function (err, rows) {
        let carrosFormatados = rows.map(carro =>
          new Carro(
            carro.carro_modelo, 
            carro.carro_marca, 
            carro.carro_ano, 
            carro.carro_cor,
            carro.carro_id
          )
        )
    
        callback([...carrosFormatados])
      }
    )
  }

  filtrarCarrosPorAno(ano, callback) {
    this._bancoDeDados.all(
      'SELECT * FROM carros WHERE carro_ano = $ano',
      { $ano: ano },
      function (err, rows) {
        let carrosFormatados = rows.map(carro =>
          new Carro(
            carro.carro_modelo, 
            carro.carro_marca, 
            carro.carro_ano, 
            carro.carro_cor,
            carro.carro_id
          )
        )
    
        callback([...carrosFormatados])
      }
    )
  }

  editarCarro(carro) {
    this._bancoDeDados.run(
      `UPDATE carros SET 
        carro_modelo = $modelo, 
        carro_marca = $marca,  
        carro_ano = $ano,  
        carro_cor = $cor  
      WHERE carro_id = $id`,
      {
        $id: carro.getId(),
        $modelo: carro.getModelo(),
        $marca: carro.getMarca(),
        $ano: carro.getAno(),
        $cor: carro.getCor()
      },
      tratarErro
    )
  }

  removerCarro(idCarro) {
    this._bancoDeDados.run(
      'DELETE FROM carros WHERE carro_id = $id',
      {
        $id: idCarro
      },
      tratarErro
    )
  }
}

module.exports = CarroRepository