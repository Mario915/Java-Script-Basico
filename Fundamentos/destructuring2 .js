 const [a] = [10]
 console.log(a)

 const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] 
 console.log(n1, n3, n5, n6)

//desestruturação alinhada
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)
//Não é muito utlizado pois é um código de difícil leitura