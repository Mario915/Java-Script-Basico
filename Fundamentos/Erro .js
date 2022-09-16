// Mecanismos de erro em JS
function tratarErroELancar(erro) {
    //throw new Error('...')
    throw {       //Para lançar um erro utiliza-se justamente essa palavra "throw"
        nome: erro.name,
        msg: erro.message, 
        date: new Date
    }
}

function imprimirName(obj) {
    try {
    console.log(obj.name.toUpperCase() + '!!!')//Se esse der errado vai para o "catch"
    } catch (e) {
       tratarErroELancar(e)//Quando vier para o "catch" vai rodar o código lá em cima
    } finally {//Independente se o código rodar ou não vai aparecer essa msg
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
//Está dando erro por causa que a palavra "nome" está em portugês
imprimirName(obj) 