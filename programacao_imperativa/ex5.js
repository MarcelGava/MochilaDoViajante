//Micro Desafio 1
//console.log(30) // na verdade não vai printar nada, já que há somente return. Coloquei console.log para demonstrar qual o valor.

//Micro Desafio 2
//console.log(20) // reproduzi a função, mas não entendi a ausência de retorno

//Funções Simples
//1

function conversor(pol) {
  return pol * 2.54
}
console.log(conversor(1))

//2
function pageWeb(url) {
  return 'http://www.' + url + '.com.br'
}
console.log(pageWeb('funcaosjs'))

//3
function recebeString(frase) {
  return frase + '!'
}
console.log(recebeString('Olá Mundo'))

//4
function idadeCachorro(idade) {
  return idade * 7
}
console.log(idadeCachorro(5))

//5
function valorHora(salario) {
  return salario / 160
}
console.log(valorHora(4000))

//6
function imc(peso, altura) {
  return peso / (altura * altura)
}
console.log(imc(119, 191))
console.log(imc(80, 191))

//7
function maiuscula(string) {
  return string.toUpperCase()
}
console.log(maiuscula('marcel'))

//8
function tipoArquivo(x) {
  return typeof x
}
console.log(tipoArquivo('marcel'))

//9
function circuferencia(raio) {
  return Math.PI * (raio * raio)
}

console.log(circuferencia(20))
