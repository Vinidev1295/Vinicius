//EXERCICIO 1
function imprimirOlaMundo(){
    console.log("Olá Mundo!")
}
imprimirOlaMundo()

//EXERCICIO 2
function imprimirNome(){
    let nome = prompt("Qual seu nome?")
    console.log(`Olá ${nome}`)
}
imprimirNome()
imprimirNome()
imprimirNome()

//EXERCICIO 3
function ImprimirSoma(){
    let numeroUm= Number(prompt("Digite um número:"))
    let numeroDois= Number(prompt("Digite um número:"))
    let resultado = numeroUm + numeroDois
    console.log(resultado)
    return resultado
}
let variavelsoma = ImprimirSoma()

//EXERCICIO 4
function imprimirArray(){
    let numeroUm = Number(prompt("Digite um número:"))
    let numeroDois = Number(prompt("Digite um número:"))
    let numeroTres = Number(prompt("Digite um número:"))
    let numeroQuatro = Number(prompt("Digite um número:"))
    let numeroCinco = Number(prompt("Digite um número:"))
    let arrayPrincipal = []
    arrayPrincipal.push(numeroUm,numeroDois,numeroTres,numeroQuatro,numeroCinco)
    console.log(arrayPrincipal)
    let novoArray = (arrayPrincipal[4]) /2
    let novoArray2 = (arrayPrincipal[0]) /2
    console.log(novoArray,novoArray2)
    let arrayMestre = []
    arrayMestre.push(novoArray,novoArray2)
    console.log(arrayMestre)
}
imprimirArray()