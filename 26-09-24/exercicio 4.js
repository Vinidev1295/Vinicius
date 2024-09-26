const pessoa = {
    nome:"Vinicius",
    idade:28,
    generoMusical: "Hip Hop"
}
function pessoas2(){
    let infopessoa = pessoa
    
const pessoa2 = {
    ...pessoa,
    comidas:["lasanha", "batata frita"],
    amigo:{
        nome: "João",
        idade: 59,
    }
}
    console.log("O nome da pessoa é", pessoa2.nome, "e suas comidas preferidas são" ,pessoa2.comidas[0], "e" ,pessoa2.comidas[1], ".", "Seu melhor amigo se chama", pessoa2.amigo.nome,  "e tem", pessoa2.amigo.idade, "anos.")
}
pessoas2()
