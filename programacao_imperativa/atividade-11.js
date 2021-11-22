//1
function converterMaiusculas(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase()
  }

  return array
}

let listaFilmes1 = ['filme1', 'filme2', 'filme3', 'novo filme']
let listaFilmes2 = [
  'Toy Story',
  'Procurando Nemo',
  'Kung-fu Panda',
  'Wally',
  'Fortnite'
]

//console.log(converterMaiusculas(listaFilmes1))

//2 e 3

function passagemDeElementos(array1, array2) {
  let invalido = array2.pop()
  let qtd = array2.length
  for (let i = 0; i < qtd; i++) {
    array1.push(array2.pop().toUpperCase())
  }

  console.log('esse filme é invalido ', invalido)
  return array1
}

//console.log(passagemDeElementos(listaFilmes1, listaFilmes2))

//4
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4]
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]

function compararClassificacoes(asia, europa) {
  let comparacoesAsiaEuropa = []
  for (let i = 0; i < asia.length; i++) {
    comparacoesAsiaEuropa[i] = asia[i] === europa[i]
  }

  return comparacoesAsiaEuropa
}

console.log(compararClassificacoes(asiaScores, euroScores))
