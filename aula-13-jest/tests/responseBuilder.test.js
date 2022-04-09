const { createResponseContent, createResponseErrors } = require('../src/responseBuilder')

describe('Criação de uma resposta da API padronizada', () => {
  it('Criar uma resposta com conteúdo (content) de mensagem de OK', () => {
    const resultado = createResponseContent({ mensagem: 'OK' })

    expect(resultado).toHaveProperty('content')
    expect(resultado).toHaveProperty('errors')

    expect(resultado.errors).toBeNull()
    expect(resultado.content).not.toBeUndefined()

    expect(resultado.content).toHaveProperty('mensagem', 'OK')
  })

  it('Criar uma resposta com erros (errors)', () => {
    const MENSAGEM_ERRO_BANCO_DADOS = 'Erro na conexão com o banco de dados'
    const MENSAGEM_ERRO_VALIDACAO = 'Erro na conexão com o banco de dados'

    const resultado = createResponseErrors([ 
      MENSAGEM_ERRO_BANCO_DADOS, 
      MENSAGEM_ERRO_VALIDACAO 
    ])

    expect(resultado).toHaveProperty('content')
    expect(resultado).toHaveProperty('errors')

    expect(resultado.content).toBeNull()
    expect(resultado.errors).not.toBeUndefined()

    expect(resultado.errors).toContain(MENSAGEM_ERRO_BANCO_DADOS)
    expect(resultado.errors).toContain(MENSAGEM_ERRO_VALIDACAO)
  })

  it('Criar uma resposta com erros (errors) sem utilizar array', () => {
    const MENSAGEM_ERRO = 'A propriedade errors deve ser uma instáncia de Array'

    expect(() => createResponseErrors({ mensagem: 'teste' })).toThrow(MENSAGEM_ERRO)
  })
})