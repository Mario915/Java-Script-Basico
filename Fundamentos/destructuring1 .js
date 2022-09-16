// New feature ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Street ABC',
        numero: 321
    }
}

const { nome, idade } = pessoa
//Aqui basicamente vai tirar os atributos "nome" e "idade" do objeto(pessoa) 
//Apartir disso teremos mais duas variáveis para trabalhar "nome" e "idade"
console.log(nome, idade)
// Para ficar mais fácil vou facilitar a variável nome e idade simplificando elas
const { nome: N, idade: i } = pessoa
console.log(N, i)

const { sobrenome, ultimoNome = true } = pessoa
console.log(sobrenome, ultimoNome)

const { endereco: { logradouro, numero, cep } } = pessoa 
console.log(logradouro, numero, cep) 