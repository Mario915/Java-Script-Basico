/*
v e v -> v
v e f -> f
f e ? -> f

v ou ? -> v
f ou v -> v
f ou f -> f

v xor v -> f
v xor f -> v
f xor v -> v
f xor f -> f 

!v = f
!f = v
*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    //As duas barrinhas significam em Java Script "OU"
    const comprarTv50 = trabalho1 && trabalho2
    //Os dois "&&" significam "E" em Java Script
    const comprarTv32 = trabalho1 != trabalho2
    //Agora o "!=" ´igual chamar de OU EXCLUSIVO
    const manterSaudavel = !comprarSorvete //Operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
 