const Processador = require("../Processador");

class ArquivoTXT extends Processador {
  lerArquivo() {
    console.log('Leu as informações do TXT')
  }
}

module.exports = ArquivoTXT