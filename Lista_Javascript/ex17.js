function aumento(plano, salarioAtual){
    switch(plano){
        case 'A':
            console.log(`Salário com aumento: R$${salarioAtual+salarioAtual*0.10}`)
            break
        case 'B':
            console.log(`Salário com aumento: R$${salarioAtual+salarioAtual*0.15}`)
            break
        case 'C':
            console.log(`Salário com aumento: R$${salarioAtual+salarioAtual*0.20}`)
            break
        default:
            console.log('Plano inválido')
            break
    }
}

aumento('A',2000)
aumento('C',3000)
aumento('B',4000)