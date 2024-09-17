const nome = prompt("Qual seu nome?")
let nascimento = Number(prompt("Qual ano você nasceu?"))
let anoAtual = Number(prompt("Qual o ano atual?"))
let idade= anoAtual - nascimento    
condicao = idade > 18
let resultado = 2050 - nascimento

console.log("Nome:", nome)
console.log("Idade:", idade)
console.log("É maior de idade?", condicao)
console.log("Idade em 2050:", resultado)