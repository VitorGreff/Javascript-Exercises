const mult2 = (n1, n2) => {
    let acc = 0
    if (n1 === 0 || n2 === 0) {
        return 0
    }
    else {
        for (let i = 0; i < n2; i++) {
            console.log(n1)
            acc += n1
        }
    }
    return acc
}

console.log(mult2(5, 5))
console.log(mult2(0, 7))
console.log(mult2(6, 7))