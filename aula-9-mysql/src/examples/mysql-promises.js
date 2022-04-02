const mysql = require('mysql2/promise')

const main = async () => {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'testeMySql2',
      port: 3306
    })

    connection.config.namedPlaceholders = true

    const [carros] = await connection.query('SELECT * FROM carros')
    
    const insertSql = 'INSERT INTO carros (carro_modelo, carro_marca, carro_ano, carro_cor) VALUES (:modelo, :marca, :ano, :cor)'

    const [informacoesItem] = await connection.query(insertSql, { modelo: 'TESTE', marca: 'TESTE', ano: 2020, cor: 'TESTE' })

    console.log('Item inserido com o ID', informacoesItem.insertId)
  } catch (error) {
    console.log('Erro no banco de dados:', error.message)
  }

  // connection
  //   .then(conn => {
  //     conn.query('SELECT * FROM carros').then(resultado => {
  //       console.log(resultado[0])
  //     })
  //   }).catch(err => {
  //     console.log('Erro:', err.message)
  //   })
}

main()
