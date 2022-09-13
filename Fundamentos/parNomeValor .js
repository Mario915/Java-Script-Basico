// par nome/valor
const best_regards = 'HI' //contexto léxico 1
/* Contexto Léxico nada mais 
é do que o local físico no qual
a minha variável foi definida */

function exec() {
    const best_regards = 'Speak' //Contexto Léxico 2 
    return best_regards
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    Age: 32,
    peso: 80, 
    endereco: {
        logradouro: 'Street very happy',
        numero: 321
    }
}

console.log(best_regards)
console.log(exec())
console.log(cliente)