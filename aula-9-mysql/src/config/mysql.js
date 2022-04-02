const mysql = require('mysql2/promise')

const conexao = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'testeMySql2',
    port: 3306
  })

  connection.config.namedPlaceholders = true

  return connection
}

module.exports = conexao