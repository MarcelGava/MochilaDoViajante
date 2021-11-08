/*let idade = 18
if (idade > 18) {
  console.log('entrou no if')
} else if ((idade = 18)) {
  console.log('entrou no else if')
} else {
  console.log('entrou no else')*/

function podeSubir(altura, estaAcompanhada) {
  if (altura >= 1.4 && altura < 2.0) {
    //return true
    console.log('Acesso autorizado')
  } else if (altura < 1.4 && altura > 1.2 && estaAcompanhada) {
    // return true
    console.log('Acesso autorizado somente com acompanhante')
  } else {
    //return false
    console.log('Acesso negado')
  }
}

console.log(podeSubir(1.5))
