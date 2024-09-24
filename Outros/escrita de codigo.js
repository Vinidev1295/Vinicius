//EXERCICIO 1
"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante." 
function novoNome(){
    let nome = "Vinicius"
    let idade = 28
    let cidade = "São Leopoldo"
    let estudante = "estudante"
console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${estudante}.`)
}
novoNome()

//---------------//
//EXERCICIO 2
function novoNome2(){
    nome = "Vinicius"
    idade = 28
    cidade = "São Leopoldo"
    let profissão = "Cozinheiro"
    const frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}`
    return frase
}
let novoNome3 = novoNome2()
console.log(novoNome3)
//--------------//
//EXERCICIO 3
function calculo(num1,num2){
let soma = num1 + num2
return soma
}
let resultado = calculo(7,12)
console.log(resultado)
//-----------//
function booleano(n1,n2){
    let bool = n1 >= n2
    return bool
}
let bool2= booleano(9,4)
console.log(bool2)
