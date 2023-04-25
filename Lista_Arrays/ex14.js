const objetoParaArray = (obj) => {
    let res = []
    for (let i in obj) {
        res.push(i)
        res.push(obj[i])
    }
    return res
}

console.log(objetoParaArray({
    codigo: 11111,
    preco: 12200
}))