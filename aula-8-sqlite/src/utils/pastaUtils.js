const fs = require('fs');

function criarPastaSeNaoExistir(caminhoPasta) {
  if (!fs.existsSync(caminhoPasta)) {
    fs.mkdirSync(caminhoPasta)
  }
}

module.exports = { criarPastaSeNaoExistir }