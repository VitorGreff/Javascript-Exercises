const removerPropriedade = (obj1, atributo) => {
    // usar igual aq, copia a referência do objeto
    const obj2 = {}
    Object.assign(obj2, obj1)
    delete obj2[atributo]
    return obj2
}

const obj = {
    a: 1,
    b: 2
}

console.log(removerPropriedade(obj, 'a'))
console.log(removerPropriedade({ id: 20, nome: 'caneta', desc: 'não preenchido' }, 'desc'))
console.log(Object.is(removerPropriedade(obj, 'a'), obj))
