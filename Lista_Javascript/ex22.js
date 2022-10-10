function anuidade(mes, valor) {

    if (mes >= 1 && mes <= 12) {
        valor += valor + valor * 0.05 * mes
        return `Valor calculado da anuidade: R$ ${valor}`
    }
    else return `Mês inválido!`
}
console.log(anuidade(13, 200))
console.log(anuidade(1, 300))
console.log(anuidade(6, 300))
console.log(anuidade(2, 250))
console.log(anuidade(5, 291))