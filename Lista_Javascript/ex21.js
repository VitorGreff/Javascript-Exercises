function planoDeSaude(idade){
    if(idade<10){
        idade += 100
    }
    else if(idade>=10&&idade<=30){
        idade+=50
    }
    else if(idade>30&&idade<=60){
        idade+=95
    }
    else if(idade>60) idade+=130

    return `VALOR A SER PAGO: R$ ${idade},00`
}
console.log(planoDeSaude(60))
console.log(planoDeSaude(23))
console.log(planoDeSaude(25))
console.log(planoDeSaude(35))
