class FormaPagamento {
  setFormaPagamento(formaPagamento) {
    this.formaPagamento = formaPagamento
  }

  pagar() {
    this.formaPagamento.pagar()
  }
}

module.exports = FormaPagamento