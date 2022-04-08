class Response {
  constructor(content, errors) {
    this.content = content
    this.errors = errors
  }
}

function createResponseContent(content) {
  return new Response(content, null)
}

function createResponseErrors(errors) {
  return new Response(null, errors)
}

module.exports = { createResponseContent, createResponseErrors }