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
  if (errors instanceof Array) {
    return new Response(null, errors)
  } else {
    throw new Error('A propriedade errors deve ser uma instáncia de Array')
  }
}

module.exports = { createResponseContent, createResponseErrors }