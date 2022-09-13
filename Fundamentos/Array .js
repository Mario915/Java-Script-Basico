const valores = [7.7 , 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])
//Colchetes para adicionar um valor ou incluir
valores[4] = 10
console.log(valores)
console.log(valores.length)
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
//Excluir um valor
console.log(valores)

console.log(typeof valores)
// Um Array é representado por um colchete