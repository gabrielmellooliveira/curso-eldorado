const Processador = require('./Processador')

const ArquivoTXT = require('./arquivos/ArquivoTXT')
const ArquivoXML = require('./arquivos/ArquivoXML')

function processar(processador) {
  if (processador instanceof Processador) {
    processador.lerArquivo()
    processador.processarInformacoes()
    processador.salvarBancoDeDados()
  }
}

function main() {
  // const processador = new ArquivoTXT()
  const processador = new ArquivoXML()

  processar(processador)
}

main()