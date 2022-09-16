const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))

//Operador ternário é composto por três partes
/*
Expressão} const resultado = nota => nota >= 7 ?
Primeira parte} 'Aprovado' : Caso a espressão seja verdadeira
Segunda parte: 'Reprovado' Caso a expressão seja falsa
*/