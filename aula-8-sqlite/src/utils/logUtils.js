function tratarErro(err) {
  if (err !== null) {
    console.error(err.message)
  }
}

module.exports = { tratarErro }