console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'ball'

console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Chair')
const obj3 = new Obj("Table")
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec