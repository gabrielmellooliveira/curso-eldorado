class Processador {
  lerArquivo() {
    throw new Error('Método não implementado')
  }

  processarInformacoes() {
    console.log('Processou as informações do arquivo')
  }

  salvarBancoDeDados() {
    console.log('Salvou as informações no banco de dados')
  }
}

module.exports = Processador