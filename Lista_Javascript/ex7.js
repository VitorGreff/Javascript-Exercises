function bhaskara(a, b, c) {
    const delta = (b ** 2) - (4 * a * c)
    if (delta < 0) return 'Delta é negativo'

    let x1 = (-b + Math.sqrt(delta)) / (2 * a)
    let x2 = (-b - Math.sqrt(delta)) / (2 * a)
    let res = []
    res.push(x1,x2)
    return res
}

console.log(bhaskara(1,3,2))
console.log(bhaskara(3,1,2))