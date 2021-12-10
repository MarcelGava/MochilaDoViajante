const Curso = require('./arquivo')

let listaAlunos = [
  { nome: 'marcel', faltas: 1, notas: [7, 8, 6] },
  { nome: 'douglas', faltas: 2, notas: [10, 8, 9] },
  { nome: 'jonas', faltas: 0, notas: [10, 10, 0] },
  { nome: 'gustavo', faltas: 2, notas: [10, 7, 10] },
  { nome: 'antonio', faltas: 1, notas: [10, 8, 0] }
]

let pi = new Curso('pi', 1, 2, listaAlunos)

console.log(pi.resultadoAprovacao('jonas'))
