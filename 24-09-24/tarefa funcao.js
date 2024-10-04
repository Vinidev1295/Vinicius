//EXERCICIO 1
function imprimirOlaMundo(){
    console.log("Olá Mundo!")
}
imprimirOlaMundo()

//EXERCICIO 2
function imprimirNome(nome){
    console.log(`Olá ${nome}`)
}
imprimirNome("vinicius")
imprimirNome("flavio")
imprimirNome("reginaldo")

//EXERCICIO 3
function ImprimirSoma(numeroUm,numeroDois){
    let calculo = numeroUm + numeroDois
    return calculo
}
let resultado = ImprimirSoma(7,12)
console.log(resultado)

//EXERCICIO 4
let arrayPrincipal = [1,2,3,4,5,6,7]
function imprimirArray(arrayPrincipal){
    let novoArray2=[]
    let a = arrayPrincipal [0] /2
    let b = arrayPrincipal [6] /2
    novoArray2.push (a,b)
    return novoArray2
}
imprimirArray(arrayPrincipal)
console.log(imprimirArray(arrayPrincipal))




//EXERCICIO 5
imprimirNome = function(nome){
    console.log(`Olá ${nome}`)
}
imprimirNome("vinicius")
imprimirNome("flavio")
imprimirNome("reginaldo")
//-----------//

ImprimirSoma = (numeroUm,numeroDois)=>{
    const calculo1 = numeroUm + numeroDois
    return calculo1
}
const resultado3 = ImprimirSoma(7,12)
console.log(resultado3)
