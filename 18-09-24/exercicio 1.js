//EXERCICIO 1: interpretação de código
const bool1 = true
const bool2 = false
const bool3 = !bool2// bool2 é true pois ! inverte o valor booleano
let resultado = bool1 && bool2
console.log("a. ", resultado)
//resultado será impresso como false pois true && false = false
resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
/* resultado será impresso como false pois (bool1)true && false(bool2) =  false
Então (bool1 && bool2)false && true(bool3) = false */
resultado = !resultado && (bool1 || bool2) //!resultado=true//
console.log("c. ", resultado)
/*entao vai ficar true && (true || false ). Resultando em true && true= true */
//--------//
console.log("d. ", typeof resultado)
/*O operador typeof retorna o tipo de uma variável em string.
Então ele vai imprimir a string como booleano, pois a mesma apresenta um valor booleano (true or false).*/
//-------------//
//EXERCICIO 2:
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
const soma = primeiroNumero + segundoNumero
console.log(soma)
/* O problema é que ele está realizando uma concatenação de strings.
Será impresso apenas a concatenação das strings.
Para realizar a soma dos numeros é necessário converter as duas strings em numbers*/
//EXERCICIO 3:
//A maneira correta de resolver seria assim://
let primeiroNumero = Number(prompt("Digite um numero!")) //convertendo ambas as strings em number.
let segundoNumero = Number(prompt("Digite outro numero!"))
const soma = primeiroNumero + segundoNumero
console.log(soma)

