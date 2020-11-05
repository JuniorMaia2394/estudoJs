//funcao sem retorno
function imprimirSoma(a,b){
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
imprimirSoma()

// funcao com retorno
function soma (a, b=1){
    return a + b
}

console.log(soma(2,3)) // preciso usar o console.log pois tem um retorno
console.log(soma(2))
console.log(soma())