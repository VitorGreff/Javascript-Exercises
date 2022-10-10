function cardapio(cod, qtd) {
    switch (cod) {
        case 100:
            console.log(`Valor a ser pago: R$${qtd * 3}`)
            break
        case 200:
            console.log(`Valor a ser pago: R$${qtd * 4}`)
            break
        case 300:
            console.log(`Valor a ser pago: R$${qtd * 5.5}`)
            break
        case 400:
            console.log(`Valor a ser pago: R$${qtd * 7.5}`)
            break
        case 500:
            console.log(`Valor a ser pago: R$${qtd * 3.5}`)
            break
        case 600:
            console.log(`Valor a ser pago: R$${qtd * 2.8}`)
            break
        default:
            console.log('Código inválido!')
            break
    }
}
cardapio(100, 4)
cardapio(400, 7)
cardapio(200, 9)
cardapio(2900, 9)