const calcularMedia = (arr) => {
    const sum = arr.reduce((acc, value) => acc + value)
    res = sum / arr.length
    return res
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))