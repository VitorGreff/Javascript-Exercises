function avaliaPontuacao(string) {
    let pontuacao = string.split(", ")
    let recorde = pontuacao[0]
    let pior = pontuacao[0]
    let piorPartida = 1
    let qtde = 0
    let res = []

    for (let i = 1; i < pontuacao.length; i++) {
        if (pontuacao[i] > recorde) {
            recorde = pontuacao[i]
            qtde++
        }

        else if (pior > pontuacao[i]) {
            pior = pontuacao[i]
            piorPartida = i+1
        }
    }
    res.push(qtde,piorPartida)
    return res
}

let stringPont = '30, 40, 20, 4, 51, 25, 42, 38, 56, 0'
console.log(avaliaPontuacao(stringPont))