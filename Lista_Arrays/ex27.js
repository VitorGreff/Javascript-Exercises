const inverter = (obj) => {
    const objInvertido = Object.entries(obj).map(chaveValor => chaveValor.reverse())
    //transforma um array em um objeto (array deve ser par chave-valor)
    return Object.fromEntries(objInvertido)
}

console.log(inverter({ a: 2, b: 4 }))
