function cedula(valor) {
    const valori = valor
    let cem = 0
    let cinquenta = 0 
    let dez = 0 
    let cinco = 0
    let um = 0
  
    while (valor > 0) {
        if (valor >= 100) {
            valor -= 100
            cem++
        }
        else if (valor >= 50) {
            valor -= 50
            cinquenta++
        }
        else if (valor >= 10) {
            valor -= 10
            dez++
        }
        else if (valor >= 5) {
            valor -= 5
            cinco++
        }
        else if (valor >=1){
            valor -= 1
            um++
        }
    }
console.log(`\nPara o valor R$${valori} serão necessárias: 
${cem} notas de cem
${cinquenta} notas de cinquenta
${dez} notas de dez
${cinco} notas de cinco
${um} notas de um`)
}
cedula(123)
cedula(256)
cedula(1024)