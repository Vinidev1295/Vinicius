//Operador E (&&): retorna true se, e somente se, os todos booleanos envolvidos também forem true
true && true   // resultado = true
true && false  // resultado = false
false && true  // resultado = false
false && false // resultado = false

//exercicio
const a = true
const b = false
const c = true
console.log(a&&b)
console.log(b&&c)
console.log(a&&c)
console.log(a&&b&&c)