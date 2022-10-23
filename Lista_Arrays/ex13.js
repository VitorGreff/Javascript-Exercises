const filtrarNumero = (arr) => {
    let res = []
    res = arr.filter((a) => {
        if (typeof a === 'number')
            return a
    })
    return res
}

console.log(filtrarNumero(['javascript', 1, "3", 20]))
console.log(filtrarNumero(['a', 'b']))