const menorNumero = (arr) => arr.reduce((acc, e) => Math.min(acc,e))

console.log(menorNumero([10,5,35,65]))
console.log(menorNumero([5,-15,50,3]))