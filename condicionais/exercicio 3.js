function condicao(num1,num2){
    if(num1>num2){
        console.log("O número é maior ")
    }else if(num1<num2){
      console.log("O número é menor ")
    }else{
      console.log("Os números são iguais ")
}
}
const num1 = Number(prompt("Diga um número:"))
const num2 = Number(prompt("Diga um número:"))
condicao(num1, num2)
