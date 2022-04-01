const mysql = require('mysql2')

// Conectar em um banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: '',
  port: 3306
})

// Criar uma tabela
const criacaoTabelaSql = `
CREATE TABLE IF NOT EXISTS carros (
  carro_id INT AUTO_INCREMENT PRIMARY KEY,
  carro_modelo VARCHAR(100),
  carro_marca VARCHAR(100),
  carro_ano INT,
  carro_cor VARCHAR(100)
)
`
connection.query(criacaoTabelaSql, (err, result, fields) => {
  console.log('err', err)
  console.log('result', result)
  console.log('fields', fields)
})

// Inserir dados na tabela
const criacaoDadosSql = `
  INSERT INTO carros (carro_modelo, carro_marca, carro_ano, carro_cor) 
  VALUES (?, ?, ?, ?)
`
connection.query(criacaoDadosSql, [ 'Kicks', 'Nissan', 2021, 'Azul' ], (err, result, fields) => {
  console.log('err', err)
  console.log('result', result)
  console.log('fields', fields)
})

// Selecionar dados na tabela
const selecaoDadosSql = `
  SELECT * FROM carros WHERE carro_id = ?
`
connection.query(selecaoDadosSql, [ 1 ], (err, result, fields) => {
  console.log('err', err)
  console.log('result', result)
  console.log('fields', fields)
})

connection.end()
