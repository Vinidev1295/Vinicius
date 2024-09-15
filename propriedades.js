const nome = "Vinicius"
console.log(nome.length)//8 (Fala qual o tamanho da string)

var frase ="BOMDIA!"
console.log(frase.toLowerCase()) //transforma todas as letras da sua string em minúsculas

const palavra = "bomdia!"
console.log(palavra.toUpperCase())//transforma todas as letras da sua string em maiúsculas

const email = "  vini@gmail.com    "
console.log(email.trim())//retira os espaços que existem antes e depois da sua string

frase = "Hoje comi cenoura"
console.log(frase.includes("cenoura")) //true
console.log(frase.includes("batata")) //false

frase = "Hoje comi cenoura, adoro cenoura"
var novaFrase = frase.replaceAll("cenoura","batata") //O método replaceAll substitui todas as ocorrências de uma string por outra string.
console.log(novaFrase)


