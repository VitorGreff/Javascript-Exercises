const contarCaractere = (char, string) => {
    let acc = 0
    for (let i in string) {
        if (string[i] === char) {
            acc++
        }
    } return acc
}

console.log(contarCaractere('r', "A sorte favorece os audazes"))
console.log(contarCaractere('c', "Conhece-te a ti mesmo"))