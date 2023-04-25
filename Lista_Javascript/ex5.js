const dinheiro = (valor)=>{
    return `R$${valor.toFixed(2).replace('.', ',')}`
}

console.log(dinheiro(0.664646))
console.log(dinheiro(0.30000000000000004))