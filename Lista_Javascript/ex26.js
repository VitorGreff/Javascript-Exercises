function pares(){
    let pares = []
    let i = 1
    while(i<=100){
        if(i%2===0){
            pares.push(i)
        }
        i++
    }
    return pares
}
console.log(pares())