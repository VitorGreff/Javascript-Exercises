function bissexto(ano) {
    if (ano % 400 === 0) {
        console.log('Ano bissexto')
        return true
    }

    else if (ano % 100 === 0) {
        console.log('Não se trata de ano bissexto')
        return false
    }
    else if (ano % 4 === 0) {
        console.log('Ano bissexto')
        return true

    }
    else {
        console.log('Não se trata de ano bissexto')
        return false
    }
}

bissexto(203)
bissexto(204)
bissexto(4)
bissexto(2022)
bissexto(2000)