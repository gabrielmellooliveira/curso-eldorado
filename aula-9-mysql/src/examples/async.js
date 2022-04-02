// Callback
let callback = () => {
  // console.log('Exemplo')
}

setTimeout(callback, 2000)

// Promises
const promise = new Promise((resolve, reject) => {
  // Leitura de arquivo  
  resolve()
  reject()
})

promise
  .then((value) => {
    console.log(value)
  })
  .catch((err) => {
    console.log('Deu erro', err)
  })

// Async e Await
console.log('Passo 1')

await console.log('Passo 2')

console.log('Passo 3')