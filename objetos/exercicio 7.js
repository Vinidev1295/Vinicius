const carrinho = []
const sacolao={
    nome:"uva",
    disponibilidade: true
}
const sacolao2={
    nome:"pera",
    disponibilidade: true
}
const sacolao3={
    nome:"mamao",
    disponibilidade: true
}
function fruteira(sacolao, sacolao2, sacolao3){
   carrinho.push(sacolao)
   carrinho.push(sacolao2)
   carrinho.push(sacolao3)
    console.log(carrinho)
}
fruteira(sacolao, sacolao2, sacolao3)
    
