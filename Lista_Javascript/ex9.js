function classifica(nota) {
    if (nota < 38) {
        return `Reprovado com nota: ${nota}`
    }
    else {
        if ((Math.ceil(nota / 5) * 5 - nota) < 3) {
            return `Aprovado com nota: ${Math.ceil(nota / 5) * 5}`
        }
        else return `Aprovado com nota: ${nota}`
    }

}
console.log(classifica(84))
console.log(classifica(38))
console.log(classifica(37))
console.log(classifica(29))
console.log(classifica(71))