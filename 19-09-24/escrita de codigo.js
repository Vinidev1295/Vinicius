//escrita de código
const nome = prompt("Qual seu nome?")
const email = prompt("Qual seu email?") 
const cadastrado = "O email: " + email + " foi cadastrado com sucesso. Seja bem vindo(o) " + nome
console.log(cadastrado)
//--------------//
const comidas = ["lasanha", "hamburguer", "pizza", "xis", "batata frita"]   
console.log("Essas são as minhas comidas favoritas: ",
 "1. " + comidas[0])
console.log("2. " + comidas[1])
console.log("3. " + comidas[2])
console.log("4. " + comidas[3])
console.log("5. " + comidas[4])
//------------------//
const usuario =  prompt("Qual sua comida favorita?")
comidas[1] = usuario 
console.log(comidas)
