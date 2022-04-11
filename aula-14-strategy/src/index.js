// Contexto
const FormaPagamento = require('./FormaPagamento')

// Estratégias
const Pix = require('./FormasPagamento/Pix')
const PayPal = require('./FormasPagamento/PayPal')
const CartaoCredito = require('./FormasPagamento/CartaoCredito')

function main() {
  const formaPagamento = new FormaPagamento()

  formaPagamento.setFormaPagamento(new Pix())

  formaPagamento.pagar()

  formaPagamento.setFormaPagamento(new PayPal())

  formaPagamento.pagar()

  formaPagamento.setFormaPagamento(new CartaoCredito())

  formaPagamento.pagar()
}

main()