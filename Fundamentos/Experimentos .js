// MAIS NODE DO QUE JS
let a = 3 

globalThis.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//Criando uma variável: Sem var e sem let
abc = 3 //Não fazer isso 
console.log(global.abc)

//Module.exports = { e: 456, f: false, g: 'teste'}