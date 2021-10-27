//1 Calculadora criada
//Nível I
//2
function adicionar(x, y) {
  return x + y
}
//3
function subtracao(x, y) {
  return x - y
}
//4
function multiplicacao(x, y) {
  return x * y
}
//5
function divisao(x, y) {
  return x / y
}
//Nível 2
//1
console.log('-------------- Teste de Operações / Calculadora --------------')
//2
console.log(adicionar(4, 5))
console.log(subtracao(4, 2))
//3
console.log(multiplicacao(2, 3))
//4
console.log(divisao(8, 2))
//5
console.log(divisao(4, 0))

//Nível 3
//1
function quadradoDoNumero(n) {
  return multiplicacao(n, n)
}

console.log(quadradoDoNumero(4))
//2

function mediaDeTresNumeros(z, y, x) {
  return adicionar(z, y, x), divisao(3, 1)
}
console.log(mediaDeTresNumeros(3, 4, 5)) //deu errado, a média está retornando como 3
