const filtrarPorQuantidadeDeDigitos = (arr, n) => {
    let res = []
    res = arr.filter(e => {
        if (e.toString().length == n) {
            return e
        }
    })
    return res
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))