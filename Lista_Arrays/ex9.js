const repetir = (elemento, n) => {
    let array= []
    for(let i = 0; i<n;i++){
        array.push(elemento)
    } return array
}   

console.log(repetir("código", 2))
console.log(repetir(7, 3))