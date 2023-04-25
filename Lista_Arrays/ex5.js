const maiorOuIgual = (a, b) => {
    if (typeof a === 'string' || typeof b === 'string') {
        return false
    }

    else return a>=b
}

console.log(maiorOuIgual(5, 1))
console.log(maiorOuIgual(0, "0"))
console.log(maiorOuIgual(0, 1))