const Correios = require("./fretes/CorreiosNovo")
const CompraCorreios = require("./processos/CompraCorreios")

function main() {
  const comprasCorreios = new CompraCorreios(new Correios())
  comprasCorreios.comprar()
}

main()