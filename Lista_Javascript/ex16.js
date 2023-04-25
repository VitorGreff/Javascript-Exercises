function calculadora(v1, sinal, v2) {
    switch (sinal) {
        case '+':
            return `Resultado: ${v1+v2}`

        case '-':
            return `Resultado: ${v1-v2}`

        case '*':
            return `Resultado: ${v1*v2}`

        case '/':
            return `Resultado: ${(v1/v2).toFixed(2)}`

        default:
            return 'Operação inválida'
    }
}

console.log(calculadora(2,'-',9))
console.log(calculadora(2,'*',9))
console.log(calculadora(2,'/',9))
console.log(calculadora(2,'+',9))