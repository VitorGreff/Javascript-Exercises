const classificaTriangulo = (x, y, z) => {
    if (x === y && x === z) return 'Equilatero'

    else if (x == y || x == z || y == z) return 'Escaleno'

    else return 'Isósceles'
}

console.log(classificaTriangulo(4, 4, 4))
console.log(classificaTriangulo(4, 4, 2))
console.log(classificaTriangulo(1, 4, 2))