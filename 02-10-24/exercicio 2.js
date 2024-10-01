const array1 = [11, 15, 18, 14, 12, 13]
function teste (array1){
    let numero = 0
    for(let i = 0; i<array1.length; i++){
        let numeroMaior = array1[i]
        if(numeroMaior >= numero){
            numero = numeroMaior
        }
    }
    console.log(`O maior número do array é ${numero}`)
}
teste(array1)
