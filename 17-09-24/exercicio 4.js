//Operador OU ( || ): retorna false se, e somente se, todos booleanos envolvidos também forem false   
true || true   // resultado = true
true || false  // resultado = true
false || true  // resultado = true
false || false // resultado = false

//Operador NÃO ( ! ): sempre retorna o booleano oposto
!true   // resultado = false
!false  // resultado = true

const a = true
const b = false
const c = true
console.log(a||b)
console.log(b||c)
console.log(a||c)
console.log(a||b||c)