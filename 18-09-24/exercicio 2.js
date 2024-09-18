//EXERCICIO 1
let idade= Number(prompt("Qual a sua idade?"))
let idadeMelhorAmigo= Number(prompt("Qual a idade do seu melhor amigo ou amiga?"))
let idadeMaior = idade > idadeMelhorAmigo
console.log("Sua idade é maior do que a do seu melhor amigo?", idadeMaior)
let diferencaIdade= idade - idadeMelhorAmigo
console.log("A diferença de idade é:", diferencaIdade)
//---------------//
//EXERCICIO 2
let numero = Number(prompt("Digite um número par:"))
let restoDaDivisao = numero % 2
console.log("O resto da divisão de", numero, "por 2 é:", restoDaDivisao);
// Existe o padrão com números pares que o resto da divisão é sempre 0.
//Se o usuário inserir números ímpares, o resto da divisão é sempre 1.
//-----------------//
//EXERCICIO 3
let idadeAnos = Number(prompt("Digite sua idade em anos:"))
//idade em meses
const mesesPorAno = 12
let idadeMeses = idadeAnos * mesesPorAno
console.log("A idade em meses é:", idadeMeses, "meses.")
//idade em dias
const diasPorAno = 365
let idadeDias = idadeAnos * diasPorAno;
console.log("A idade em dias é:", idadeDias, "dias.")
//idade em horas
const horasPorDia = 24
let idadeHoras = idadeDias * horasPorDia
console.log("A idade em horas é:", idadeHoras, "horas.")
//----------------//
//EXERCICIO 4
let primeiroNumero = Number(prompt("Digite o primeiro número:"))
let segundoNumero = Number(prompt("Digite o segundo número:"))
let maiorQue = primeiroNumero > segundoNumero // Saber se é maior.
console.log("O primeiro número é maior que o segundo?", maiorQue)
let igual = primeiroNumero === segundoNumero // Saber se é igual.
console.log("O primeiro número é igual ao segundo?", igual)
let divisivelPorSegundo = (segundoNumero !== 0) && (primeiroNumero % segundoNumero === 0)
console.log("O primeiro número é divisível pelo segundo?", divisivelPorSegundo)
let divisivelPorPrimeiro = (primeiroNumero !== 0) && (segundoNumero % primeiroNumero === 0)
console.log("O segundo número é divisível pelo primeiro?", divisivelPorPrimeiro)