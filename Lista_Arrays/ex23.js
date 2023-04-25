const contarPalavras = (string) => {
    let acc = 0
    for (let i in string) {
        if (string[i] === ' ') {
            acc++
        }
    }
    return acc + 1
}

console.log(contarPalavras('Sou uma frase'))
console.log(contarPalavras('Me divirto aprendendo a programar!'))