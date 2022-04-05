function criarData(data) {
  let dataFormatada = new Date(data)

  dataFormatada.setDate(dataFormatada.getUTCDate())
  dataFormatada.setHours(dataFormatada.getUTCHours())

  return dataFormatada
}

function mostrarDataLocal(data) {
  let dataFormatada = data

  dataFormatada.setHours(dataFormatada.getHours() - 3)

  console.log(dataFormatada)
}

function compararDatas() {

}