const sqlite = require('sqlite3')

function tratarErro(err) {
  if (err !== null) {
    console.error('Ocorreu um erro no banco de dados -', err.message)
  }
}

// Verificação e criação de pasta (Se a pasta não existir vai cria-la)
const fs = require('fs');
const PASTA_DATABASE = './src/database';

if (!fs.existsSync(PASTA_DATABASE)) {
  fs.mkdirSync(PASTA_DATABASE)
}

// Criação do banco de dados
let bancoDeDados = new sqlite.Database('src/database/database.db', tratarErro)

// Criação das tabelas
bancoDeDados.run(`
  CREATE TABLE IF NOT EXISTS carros (
    carro_id INTEGER PRIMARY KEY AUTOINCREMENT,
    carro_modelo TEXT NOT NULL,
    carro_marca TEXT NOT NULL,
    carro_ano INTEGER NOT NULL,
    carro_cor TEXT NOT NULL
  )
`, tratarErro)

// Inserção de valores na tabela
bancoDeDados.run(
  "INSERT INTO carros (carro_modelo, carro_marca, carro_ano, carro_cor) VALUES ('Cruze LT', 'Chevrolet', 2020, 'Cinza')", 
  tratarErro
)

bancoDeDados.run(
  `INSERT INTO carros 
  (carro_modelo, carro_marca, carro_ano, carro_cor) 
  VALUES 
  (?, ?, ?, ?)
  `, 'Kicks', 'Nissan', 2020, 'Azul', 
  tratarErro
)

bancoDeDados.run(
  `INSERT INTO carros 
  (carro_modelo, carro_marca, carro_ano, carro_cor) 
  VALUES 
  ($modelo, $marca, $ano, $cor)`, 
  { 
    $modelo: 'Kicks',
    $marca: 'Nissan',
    $ano: 2021,
    $cor: 'Preto'
  }, 
  tratarErro
)

// Preparação de script para utilizar mais de uma vez
let stmt = bancoDeDados.prepare(
  "INSERT INTO carros (carro_modelo, carro_marca, carro_ano, carro_cor) VALUES (?, ?, ?, ?)", 
  tratarErro
)

for (let index = 0; index < 10; index++) {
  stmt.run('Cruze LT', '', 2020, '')
}

stmt.finalize()

// Seleção de valores na tabela
bancoDeDados.all(
  "SELECT * FROM carros", 
  function (err, rows) {
    console.log(rows)
  }
)

bancoDeDados.each(
  "SELECT * FROM carros", 
  function (err, row) {
    console.log('ITEM: ', row)
  }
)

bancoDeDados.get(
  "SELECT * FROM carros", 
  function (err, row) {
    console.log('SOMENTE UM: ', row)
  }
)

// Atualização de valores na tabela
bancoDeDados.run(
  "UPDATE carros SET carro_modelo = 'Cruze LTZ' WHERE carro_id = 1", 
  tratarErro
)

// Remoção de valores na tabela
bancoDeDados.run(
  "DELETE FROM carros WHERE carro_id = 1", 
  tratarErro
)

// Executa comandos em sequencia
bancoDeDados.serialize(() => {
  // Inserir um carro

  // Buscar id do carro

  // Inserir relacionamento do carro com a venda
})

// Executa comandos em paralelo
bancoDeDados.parallelize(() => {
  // Inserir um carro

  // Buscar id do carro

  // Inserir relacionamento do carro com a venda
})

// Fecha a conexão com o banco de dados
bancoDeDados.close()