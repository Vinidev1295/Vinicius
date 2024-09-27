function condicao(num1,num2){
let condicao2= (num1 === num2)
if(condicao2){
    return "Os números são iguais."
        
} else {
    return "Os numeros são diferentes"
}
}
const num1 = Number(prompt("Diga um número:"))
const num2 = Number(prompt("Diga um número:"))
const resultado = condicao(num1,num2)
console.log(resultado)
