function tratarErro(err) {
  if (err !== null) {
    console.log('LOG:', err.message)
  }
}

module.exports = { tratarErro }