function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) //Irá imprimir o resultado da propriedade backender do objeto pessoa.
console.log(minhaFuncao(pessoa, "altura")) // Irá imprimir como undefined pois nao definido nenhuma propriedade para altura.
