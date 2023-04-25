const funcaoDaSorte = (number) => {
    let sorte = geraNumero()
    if (number === sorte) return `Parabéns! O número sorteado foi o ${sorte}`

    return `Que pena! O número sorteado foi o ${sorte}`
}

const geraNumero = (min = 0, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min

console.log(funcaoDaSorte(10))

