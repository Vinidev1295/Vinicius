const filme = {
    diretor:"George Lucas",
    nome:"star wars",
    ano:"1977",
    elenco:["Mark Hamill", "Harrison Ford", "Carrie Fisher"]
}
console.log(filme.diretor)
console.log(filme.nome)
console.log(filme["ano"])
console.log(filme["elenco"])
filme.nomesPersonagens=["Luke Skywalker", "Han Solo", "Princesa Leia"]
console.log(filme.elenco[0], "interpreta", filme.nomesPersonagens[0])
console.log(filme.elenco[1], "interpreta", filme.nomesPersonagens[1])
console.log(filme.elenco[2], "interpreta", filme.nomesPersonagens[2])
filme.elenco[0]= "Xuxa"
console.log(filme)
