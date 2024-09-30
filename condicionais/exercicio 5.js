let concluido = prompt("Você concluiu o ensino médio? ")
let idade = prompt("Qual sua idade? ")
let faculdade = prompt("Você está cursando outra faculdade? ")
function estudar(concluido,idade,faculdade){
if(concluido==="sim"&&idade>=18&&faculdade==="nao"){
  console.log("Você pode estudar!")
}else{
  console.log("Você não pode estudar na faculdade ainda!")
}
}
estudar(concluido,idade,faculdade)
