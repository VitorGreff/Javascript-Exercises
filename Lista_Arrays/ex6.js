const inverso = (valor) => {
    if (typeof valor === 'boolean') {
        if (valor === false) {
            return true
        } else return false
    }

    else if (typeof valor === 'number') {
        return valor * -1
    }
    else return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`
}


console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(-2000))
console.log(inverso("programação"))