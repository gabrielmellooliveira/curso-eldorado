const Processador = require("../Processador");

class ArquivoXML extends Processador {
  lerArquivo() {
    console.log('Leu as informações do XML')
  }
}

module.exports = ArquivoXML